import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.html',
  styleUrl: './reactive.css',
})
export class Reactive {
  favoriteColorControl = new FormControl('');
}
