import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {
  constructor() {}

  isInvalid(control: AbstractControl) {
    const invalid = control.invalid && control.touched;
    return invalid ? 'border-danger' : '';
  }

  // mark all controls dirty
  markControlsTouched(group: any) {
    for (let i in group.controls) {
      group.controls[i].markAsTouched();
      if (group.controls[i] instanceof FormControl || group.controls[i] instanceof FormArray) {
        this.markControlsTouched(group.controls[i]);
      }
    }
  }
}
