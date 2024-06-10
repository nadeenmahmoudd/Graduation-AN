import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
 constructor(private _productsService:ProductsService , private _activatedRoute:ActivatedRoute
  , private _cartService:CartService ,  private toastr: ToastrService){}
 ngOnInit(){
  this._activatedRoute.paramMap.subscribe((res:any)=>{
    console.log(res.get('id'))
    this.id=res.get('id')
  })
  this.getProductDetails()
 }
 id!:number;
 product:any;
 getProductDetails(){
  this._productsService.getProductDetailsById(this.id).subscribe({
    next:(res)=>{
      console.log(res);
      this.product=res

    },
    error:(err)=>{
      console.log(err);
      
    }
  })
 }
 addToCart(id:number){
  this._cartService.addToCart(id).subscribe({
    next:(res)=>{
      console.log(res);
      this._cartService.count.next(res.usercart1)
      // this.toastr.success('product added successfully!');
      this.toastr.success(res.message, '',{
        timeOut:2000,
        progressBar:true,
        positionClass:'toast-bottom-right'})
    },
    error:(err)=>{
      console.log(err);
      this.toastr.error(err.error , 'Error' );
      
    }
  })
 }
}
