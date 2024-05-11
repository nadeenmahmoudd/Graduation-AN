import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor( private _cartService:CartService){}
ngOnInit(){
  this.ShowCart;
}
products:any
ShowCart(){
  this._cartService.getCart().subscribe({
    next:(res)=>{
      console.log(res);
      this.products=res
      },
      error(err) {
        console.log(err);
        
      },
  })
}
}
