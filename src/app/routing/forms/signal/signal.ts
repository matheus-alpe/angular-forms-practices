import { Component, computed, signal, OnInit } from '@angular/core';
import {
  email,
  form,
  FormField,
  hidden,
  readonly,
  required,
  FormRoot,
  minLength,
  applyEach,
  min,
} from '@angular/forms/signals';
import { LoginData, ThemeOptions, ProductOrder } from './signal.types';

const FORM_INITIAL_STATE: LoginData = {
  email: '',
  password: '',
  profile: {
    firstName: '',
    lastName: '',
  },
  settings: {
    theme: ThemeOptions.System,
  },
  products: [],
  isPublic: false,
  publicUrl: '',
};

@Component({
  selector: 'app-form-signal',
  imports: [FormField, FormRoot],
  templateUrl: './signal.html',
})
export class Signal implements OnInit {
  loginModel = signal<LoginData>(FORM_INITIAL_STATE);
  loginForm = form(
    this.loginModel,
    (schemaPath) => {
      required(schemaPath.email, { message: 'Email is required' });
      email(schemaPath.email, { message: 'Please enter a valid email address' });
      hidden(schemaPath.publicUrl, ({ valueOf }) => !valueOf(schemaPath.isPublic));
      readonly(schemaPath.profile.lastName);
      minLength(schemaPath.products, 1, { message: 'At least one product must be added' });
      applyEach(schemaPath.products, (productPath) => {
        required(productPath.id, { message: 'Product ID is required' });
        required(productPath.name, { message: 'Product name is required' });
        required(productPath.quantity, { message: 'Product quantity is required' });
        min(productPath.quantity, 1, { message: 'Quantity must be at least 1' });
      });
    },
    {
      submission: {
        action: async () => this.onSubmit(),
      },
    },
  );
  readonly passwordLength = computed(() => this.loginForm.password().value().length);
  readonly themeOptions = Object.values(ThemeOptions);

  ngOnInit(): void {
    this.loginModel.set({
      email: 'your@email.com',
      password: 'password',
      profile: {
        firstName: 'First name',
        lastName: 'Last name',
      },
      settings: {
        theme: ThemeOptions.Dark,
      },
      products: [],
      isPublic: false,
      publicUrl: '',
    });
  }

  async onSubmit() {
    const formData = this.loginModel();
    console.log('Form submitted with data:', formData);
    this.resetForm();
  }

  resetForm() {
    this.loginForm().reset(FORM_INITIAL_STATE);
  }

  productErrors(index: number) {
    const product = this.loginForm.products[index];
    return [...product.name().errors(), ...product.quantity().errors()];
  }

  addRandomProduct() {
    const newProduct: ProductOrder = {
      id: Math.random().toString(36).substring(2, 9),
      name: `Product ${this.loginModel().products.length + 1}`,
      quantity: Math.floor(Math.random() * 10) + 1,
    };
    this.loginModel.update((model) => ({
      ...model,
      products: [...model.products, newProduct],
    }));
    // triggering validation for the products field after adding a new product
    this.loginForm.products().markAsDirty();
  }
}
