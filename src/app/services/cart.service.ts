import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:CartItem[]=[];
  constructor() { }


  addToCart(carDetail:CarDetail){
    let item=CartItems.find(c=>c.carDetail.id===carDetail.id);
    if (item) {
      item.quantity+=1;
    }else{
      let cartItem=new CartItem();
      cartItem.carDetail=carDetail;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(carDetail:CarDetail){
    let item:CartItem=CartItems.find(c=>c.carDetail.id===carDetail.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
