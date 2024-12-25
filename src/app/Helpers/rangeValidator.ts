import { AbstractControl, ValidatorFn } from '@angular/forms';
//check if the mark between 0 and 20 , and have a numeric value
export function rangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value == null || value === '') {
      return null; 
    }
    const numericValue = parseFloat(value);
    if (isNaN(numericValue) || numericValue < min || numericValue > max) {
      return { 'range': { min, max } };
    }
    return null;
  };
}
