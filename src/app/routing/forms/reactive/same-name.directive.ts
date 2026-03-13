import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const sameNameDirective: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const name = control.get('name');
  const lastName = control.get('lastName');

  if (!name || !name.value || !lastName || !lastName.value) {
    return null;
  }

  return name.value == lastName.value ? { sameName: true } : null;
};
