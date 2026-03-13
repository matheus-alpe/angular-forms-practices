import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface User {
  name: string;
  email: string;
  favoriteColor: string;
  country: string;
  newsletter: boolean;
}

@Component({
  selector: 'app-form-template',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  user = signal<User>({
    name: '',
    email: '',
    favoriteColor: '',
    country: '',
    newsletter: false,
  });

  submitted = signal(false);
  submitMessage = signal('');

  countries = [
    { code: 'br', name: 'Brazil' },
    { code: 'us', name: 'United States' },
    { code: 'ca', name: 'Canada' },
  ];

  onSubmit(form: NgForm) {
    this.submitted.set(true);
    if (form.valid) {
      this.submitMessage.set(`Form submitted! User: ${this.user().name}`);
      console.log('Form Value:', this.user());
    } else {
      this.submitMessage.set('Please fix the errors above');
    }
  }

  reset(form: NgForm) {
    form.resetForm();
    this.user.set({
      name: '',
      email: '',
      favoriteColor: '',
      country: '',
      newsletter: false,
    });
    this.submitted.set(false);
    this.submitMessage.set('');
  }
}
