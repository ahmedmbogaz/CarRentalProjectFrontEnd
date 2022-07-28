import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  currentOpen:Car;
  constructor(
    private cartService:CartService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    ) { }

  ngOnInit(): void {
   this.getCart();
  }

  RunMethodByActivatedRoute(){
    this.activatedRoute.params.subscribe((params)=>{

    })
  }

  // setCurrentOpen(car:Car){
  //   this.currentOpen=car;
  // }
  getCart(){
    this.cartItems=this.cartService.list();
  }

  removeFromCart(car:Car){
    this.cartService.removeFromCart(car);
    this.toastrService.info(car.carName+" "+ "Sepetten Çıkarıldı","Silme işlemi gerçekleşti") 
  }

  // addToCarDetail(currentOpen:Car){
  //   this.cartService.addToCarDetail(currentOpen);
  // }

}
