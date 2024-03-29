import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator,FormBuilder, Validators  } from "@angular/forms"
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthService,private router: Router,private toastrService:ToastrService) { }

  ngOnInit(): void {
  this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value);
    
      this.authService.login(loginModel).subscribe(response=>{this.toastrService.info(response.message) 
        localStorage.setItem("token",response.data.token),
        this.router.navigateByUrl("/admin/process") 
        
      },
      responseError=>{this.toastrService.error(responseError.error)})
    }
  }

}
