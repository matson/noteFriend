import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { BackendService } from '../backend.service';
import { Match } from './validators/matchPasswords';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private service: BackendService) {}

  registerForm = this.fb.group({
    username:['',[Validators.required, Validators.minLength(6)]], //username should be required and min. 6 
    password:['',[Validators.required, Validators.minLength(8)]], //password should be required and min. 8
    confirmPassword:['']

  },{
    validators: Match
  })

  usernameError = this.registerForm.get('username')?.invalid
  passwordError = this.registerForm.get('password')?.invalid
  userTouch = this.registerForm.get('username')?.touched
  passTouch = this.registerForm.get('password')?.touched

  
  //Register Button:
  register(){
    if (this.registerForm.valid){
      //save
      this.service.registerProceed(this.registerForm.value).subscribe(res => {
        //this.toastr.success('Registered Successfully');
        console.log("user registered")
        //redirect to login page: 
        this.router.navigate(['login']);
      });
    } else{
      //this.toastr.warning("Please enter valid credentials");
      console.log("error")
    }
    
  }

}
