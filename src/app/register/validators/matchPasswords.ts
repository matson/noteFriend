import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
 

//to validate if password and confirm password are matching:
 export const Match : ValidatorFn = (control: AbstractControl):ValidationErrors | null => {
    
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');
    if(password && confirmPassword && password?.value != confirmPassword?.value){
        return {
                passwordMatchError : true
        }   
    }
    return null;

}