import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[];
  currentCategory:Category;
  constructor(private categoryservice:CategoryService,private productService:ProductService ) { }

  ngOnInit(): void {
    this.getCategories();
    
  }
  getCategories(){
    this.categoryservice.getCategories().subscribe(response=>{
      this.categories=response.data;
    })
  }
  setCurrentCategory(category:Category){
    this.currentCategory=category;
  }
  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "text-danger"
    }
    else
    {return "text-dark"}
  }
  getAllCategoryClass(){
    if(!this.currentCategory){
      return "text-danger"

    }
    else
    {return "text-dark"}
  }

  }
  


