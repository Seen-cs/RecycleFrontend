import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productUpdateForm : FormGroup;
  categories:Category[]=[];
  products:Product[] = [];
  currentCategory:Category;
  currentProduct:Product;
  filterText:"";

  constructor(private formBuilder:FormBuilder, 
    private productService:ProductService,private categoryservice:CategoryService,private toastrService:ToastrService) { }

    ngOnInit(): void {
      this.createProductUpdateForm();
      this.getCategories();
      this.getProducts();
    }
    getCategories(){
      this.categoryservice.getCategories().subscribe(response=>{
        this.categories=response.data;
      })
    }
  createProductUpdateForm(){
    this.productUpdateForm = this.formBuilder.group({
      productID:"",
      productName:["",Validators.required],
      unitPrice: ["",Validators.required],
      categoryID: ""
    })
 }
 setCurrentCategory(category:Category){
  this.currentCategory = category;
}
setCurrentProduct(product:Product){
  this.currentProduct=product;
}
getProducts(){
  this.productService.getProducts().subscribe
  (response=>{this.products = response.data
   
  });
}
getCurrentCategoryClass(category:Category){
  if(category==this.currentCategory){
    return "btn btn-outline-danger"
  }
  else
  {return "btn btn-outline-secondary"}
}
getCurrentProductClass(product:Product){
  if(product==this.currentProduct){
    return "btn btn-outline-danger"
  }
  else
  {return "btn btn-outline-secondary"}
}
 update(){
   if(this.productUpdateForm.valid){
    this.productUpdateForm.get('categoryID').setValue(this.currentCategory.categoryID,undefined)
    this.productUpdateForm.get('productID').setValue(this.currentProduct.productID,undefined)

     let productModel = Object.assign({},this.productUpdateForm.value)
     this.productService.update(productModel).subscribe(response=>{
       this.toastrService.success(response.message,"Başarılı")
     },responseError=>{
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
