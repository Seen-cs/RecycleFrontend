import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(product:Product,quantity:number){
    var item = CartItems.find(c=>c.product.productID==product.productID);
    if(item){
      item.quantity =Number(quantity)+Number(item.quantity);
      item.price=item.quantity*product.unitPrice;
      
    }
    else{
      let cartItem =new CartItem();
      cartItem.product =product;
      cartItem.quantity=quantity;
      cartItem.price=product.unitPrice*quantity;
      CartItems.push(cartItem)
    }
  }
  list():CartItem[]{
    return CartItems;
  }
  removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productID==product.productID);
    CartItems.splice(CartItems.indexOf(item),1);
  }
}
