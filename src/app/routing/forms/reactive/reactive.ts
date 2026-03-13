import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  StatusChangeEvent,
  Validators,
} from '@angular/forms';
import { filter } from 'rxjs';
import { forbiddenNameValidator } from './forbidden-name.directive';
import { sameNameDirective } from './same-name.directive';

@Component({
  selector: 'app-form-reactive',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.html',
})
export class Reactive {
  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.nonNullable.group(
    {
      name: ['', [Validators.required, Validators.minLength(2), forbiddenNameValidator(/bob/i)]],
      lastName: [''],
      aliases: this.formBuilder.nonNullable.array([['']]),
      address: this.formBuilder.nonNullable.group({
        street: [''],
        city: [''],
      }),
    },
    {
      validators: [sameNameDirective],
    },
  );

  get name() {
    return this.profileForm.get('name') as FormControl;
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor() {
    this.profileForm.events
      .pipe(filter((e) => e instanceof StatusChangeEvent))
      .subscribe((e) => console.log(e));
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.reset();
  }

  patchValue() {
    this.profileForm.patchValue({
      name: 'Matt',
      address: {
        city: 'Palhoça',
      },
    });
  }

  updateValue() {
    this.profileForm.setValue(
      {
        name: 'Matheus',
        lastName: 'Alpe',
        address: {
          street: 'Rua das Flores, 123',
          city: 'Florianópolis',
        },
        aliases: this.formBuilder.nonNullable.array([this.formBuilder.nonNullable.control('Matt')])
          .value,
      },
      { emitEvent: false },
    );
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  reset() {
    this.profileForm.reset();
  }
}
