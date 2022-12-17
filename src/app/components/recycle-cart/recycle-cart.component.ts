import { RctService } from './../../services/rct.service';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-recycle-cart',
  templateUrl: './recycle-cart.component.html',
  styleUrls: ['./recycle-cart.component.css']
})
export class RecycleCartComponent implements OnInit {
  transferForm:FormGroup;
  totalPrice:number=0;
  cartItems:CartItem[]=[];
  constructor(private cartService:CartService,
    private toastrService:ToastrService,private formBuilder:FormBuilder,private rctService:RctService) { }

  ngOnInit(): void {
    this.getCart();
    this.calculateTotalPrice();
    this.createTransferForm();
  }

  createTransferForm(){
    this.transferForm = this.formBuilder.group({
      amount:"",
      receiverAddress:["",Validators.required],
    })
 }

 adminTransfer(){


  if(this.transferForm.valid){
    this.transferForm.get('amount').setValue(this.totalPrice.toString(),undefined)
    this.rctService.adminTransfer(JSON.stringify(this.transferForm.value)).subscribe()
    this.toastrService.success("Başarılı");
  }
  
}
  getCart(){
    this.cartItems=this.cartService.list();
  }
  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.toastrService.error(product.productName+"Sepetten silindi")
  }
  calculateTotalPrice(){
    this.cartItems.forEach(cartItem => {
      this.totalPrice = Number(this.totalPrice)+Number(cartItem.price)
    });
  }
}
