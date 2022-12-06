import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-remove',
  templateUrl: './product-remove.component.html',
  styleUrls: ['./product-remove.component.css']
})
export class ProductRemoveComponent implements OnInit {
  products:Product[] = [];
  currentProduct:Product;
  productRemoveForm : FormGroup;
  filterText:"";
  constructor(private productService:ProductService,private toastrService:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
   this.getProducts();
   this.createProductAddForm();
    
  }
  setCurrentProduct(product:Product){
    this.currentProduct=product;
  }
  getProducts(){
    this.productService.getProducts().subscribe
    (response=>{this.products = response.data
     
    });
  }
  getCurrentProductClass(product:Product){
    if(product==this.currentProduct){
      return "btn btn-outline-danger"
    }
    else
    {return "btn btn-outline-secondary"}
  }
  createProductAddForm(){
    this.productRemoveForm = this.formBuilder.group({
      productName: "",
      productID:"",
      unitPrice:"",
      categoryID :""
    })
 }
  remove(){
    
     if(this.productRemoveForm.valid){
      console.log(this.currentProduct.productName)
      this.productRemoveForm.get('categoryID').setValue(this.currentProduct.categoryID,undefined)
      this.productRemoveForm.get('productID').setValue(this.currentProduct.productID,undefined)
      this.productRemoveForm.get('unitPrice').setValue(this.currentProduct.unitPrice,undefined)
      this.productRemoveForm.get('productName').setValue(this.currentProduct.productName,undefined)
      
       let productModel = Object.assign({},this.productRemoveForm.value)
       this.productService.remove(productModel).subscribe(response=>{
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
