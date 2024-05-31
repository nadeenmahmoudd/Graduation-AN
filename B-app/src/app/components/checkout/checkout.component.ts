import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  orderForm:FormGroup=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required , Validators.email]),
    mobileNumber: new FormControl("",[Validators.required ]),
    address:new FormControl("",[Validators.required]),
})
handelOrderForm(){

}
}

