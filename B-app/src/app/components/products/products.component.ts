import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import {Products} from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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









// addToCart(productId: number) {
//   this._cartService.addToCart(productId).subscribe(
//     () => {
//       console.log('Item added to cart successfully');
//       // Handle success, e.g., show a success message
//     },
//     (error) => {
//       console.error('Error adding item to cart:', error);
//       // Handle error, e.g., show an error message
//       console.log(productId);
      
//     }
// );
// }





 






// token = localStorage.getItem('token');
// httpOptions = {
//   headers: new HttpHeaders({ 'Authorization':` Bearer ${this.token}` })
// };

// addToCart(productId: number) {
 
//   this._httpClient.post<any>('http://bussinesshub.runasp.net/api/Cart/AddToCart?productId=', { productId },

//   this.httpOptions)
//     .subscribe(response => {
//       // Success handling
//       console.log(response);
      
      
//     }, error => {
//       // Error handling
//       console.log(error);
//       console.log(productId);
// console.log(this.httpOptions.headers);

//     });
// }
}
