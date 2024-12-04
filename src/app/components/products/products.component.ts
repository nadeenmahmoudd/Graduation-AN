import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import {Products} from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  template: ` 
  <button (click)="addToCart(123)">Add to Cart</button>
`,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
constructor( private _productsService:ProductsService , private _cartService:CartService,
  private toastr: ToastrService  ){
}

ngOnInit(){
  this.showProducts();
}
allProducts:Products[]=[]
searchTerm:string="";
fallBackImgs:string="assets/images/fallback.png" 
showProducts(){
  this._productsService.getAllProducts().subscribe({
    next:(res)=>{
      console.log(res);
      this.allProducts=res;
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
addToCart(productId:any){
this._cartService.addToCart(productId ).subscribe({
  next:(res)=>{
    this._cartService.count.next(res.usercart1)
    console.log(res);
    this.toastr.success('product added successfully!');
    
  },
  error:(err)=>{
    console.log(err);
    this.toastr.error(err.error , 'Error' );
    // console.log(err.error);
   
    
  }
})
}

handleImageError(event: Event): void {
  const target = event.target as HTMLImageElement;
  target.src = this.fallBackImgs; // Replace with the fallback image
}

}
