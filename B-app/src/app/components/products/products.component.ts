import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
constructor(){}
images:string[]=["assets/images/6png.jpg","assets/images/1png.jpg",
"assets/images/2png.jpg","assets/images/3png.jpg",
"assets/images/4png.jpg","assets/images/5png.jpg",
"assets/images/6png.jpg","assets/images/7png.jpg",
"assets/images/8png.jpg","assets/images/9png.jpg",
"assets/images/2png.jpg","assets/images/4png.jpg"] 

addToCart(){

}
}

