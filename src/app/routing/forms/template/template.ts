import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  imports: [FormsModule],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  favoriteColor = signal('');
}
