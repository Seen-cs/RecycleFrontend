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

  cartItems:CartItem[]=[];
  constructor(private cartService:CartService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart(){
    this.cartItems=this.cartService.list();
  }
  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.toastrService.error(product.productName+"Sepetten silindi")
  }

}
