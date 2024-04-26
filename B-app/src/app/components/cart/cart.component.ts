import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
// image:string="assets/images/Home/step1.png"
images:string[] =["assets/images/Home/step1.png","assets/images/Home/step2.png","assets/images/Home/step3.png"]
}
