import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appForbiddenNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true}]
})
export class ForbiddenNameValidatorDirective implements Validator {

  @Input() forbiddenName!: string;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control.value, this.forbiddenName);
    
    if (control.value === this.forbiddenName) {
      return {invalidName: true}
    }
    return null;
  }

}
