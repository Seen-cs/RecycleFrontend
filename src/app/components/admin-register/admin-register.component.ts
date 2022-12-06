import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  adminRegisterForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService) { }
  
  createAdminRegisterForm(){
    this.adminRegisterForm = this.formBuilder.group({
      email :"",
      password:"", 
      firstName :"",
      lastName :"",
      nationalityId :"",
      dateOfBirth : 0
    })
 }
  ngOnInit(): void {
    this.createAdminRegisterForm();
  }
  add(){
    if(this.adminRegisterForm.valid){
      
      let registerModel = Object.assign({},this.adminRegisterForm.value)

      this.authService.register(registerModel).subscribe(response=>{this.toastrService.info(response.message) 
        
      },
      responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        }         
      })
      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
    
  }
}
