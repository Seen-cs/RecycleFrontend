import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm : FormGroup;
  categories:Category[]=[];
  currentCategory:Category;
  constructor(private formBuilder:FormBuilder, 
    private productService:ProductService, private categoryservice:CategoryService,private toastrService:ToastrService) { }

  ngOnInit(): void {
   
    this.getCategories();
    this.createProductAddForm();
  
  }
  getCategories(){
    this.categoryservice.getCategories().subscribe(response=>{
      this.categories=response.data;
    })
  }

  createProductAddForm(){
     this.productAddForm = this.formBuilder.group({
       productName:["",Validators.required],
       unitPrice: ["",Validators.required],
       categoryID :""
     })
  }
  setCurrentCategory(currentCategory:Category){
    this.currentCategory = currentCategory;  
  }
  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "btn btn-outline-danger"
    }
    else
    {return "btn btn-outline-secondary"}
  }
  
  add(){
    if(this.productAddForm.valid){
      
      console.log(this.currentCategory)
      this.productAddForm.get('categoryID').setValue(this.currentCategory.categoryID,undefined)
      
      let productModel = Object.assign({},this.productAddForm.value)

      this.productService.add(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
        setTimeout(() => window.location.reload(), 700)
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