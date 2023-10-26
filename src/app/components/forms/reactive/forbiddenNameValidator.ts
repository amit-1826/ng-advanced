import { FormControl, ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(name: string): ValidationErrors | null {
    return (formControl: AbstractControl): ValidationErrors | null => {
        if (formControl.value === name) {
            return {invalidName: true}
        }
        return null;
    }
}