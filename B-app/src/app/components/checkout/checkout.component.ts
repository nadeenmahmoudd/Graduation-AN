import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/services/booking.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private _bookingService:BookingService , private _cartService:CartService){}
  orderForm:FormGroup=new FormGroup({
    secNum: new FormControl("",[Validators.required ]),
    address:new FormControl("",[Validators.required]),
})
secNum!:number;
address:string=""
isOrdered:boolean=true;
handelOrderForm(secNum:number , address:string){
this._bookingService.checkOutSession( secNum , address).subscribe({
  next:(res)=>{
    console.log(res);
    this.isOrdered=false;
    this._cartService.count.next(0);

  },
  error:(err)=>{
    console.log(err);
    
  }
})
}
}

