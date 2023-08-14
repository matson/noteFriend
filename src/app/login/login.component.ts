import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private fb: FormBuilder, 
    private service: BackendService, 
    private toastr: ToastrService, 
    private router: Router, 
    private http: HttpClient) {
      sessionStorage.clear()
  }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    username:['', [Validators.required]], //username required
    password:['',[Validators.required]], //password required

  });
   usernameError = this.loginForm.get('username')?.invalid
   passwordError = this.loginForm.get('password')?.invalid

   //Login Button:
  login(){
    this.service.getUser().subscribe(res=>{
      const user = res.find((a:any)=>{
        //if username and password match
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      })
      if(user){
        alert("Login Successful")
        this.loginForm.reset();
        this.router.navigate([''])
      }else{
        alert("User not found or password is incorrect")
      }
    })
     
   }

}
