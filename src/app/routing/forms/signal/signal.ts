import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-form-signal',
  imports: [FormField],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  loginModel = signal({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel);
}
