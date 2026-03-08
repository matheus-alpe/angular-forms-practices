import { Component, computed, signal, OnInit } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

enum ThemeOptions {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

interface ProductOrder {
  id: string;
  name: string;
  quantity: number;
}

interface LoginData {
  email: string;
  password: string;
  profile: {
    firstName: string;
    lastName: string;
  };
  settings: {
    theme: ThemeOptions;
  };
  products: ProductOrder[];
}

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
};

@Component({
  selector: 'app-form-signal',
  imports: [FormField],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal implements OnInit {
  loginModel = signal<LoginData>(FORM_INITIAL_STATE);
  loginForm = form(this.loginModel);
  passwordLength = computed(() => this.loginForm.password().value().length);
  themeOptions = Object.values(ThemeOptions);

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
    });
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    const formData = this.loginModel();
    console.log('Form submitted with data:', formData);
    this.resetForm();
  }

  private resetForm() {
    this.loginModel.set(FORM_INITIAL_STATE);
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
  }
}
