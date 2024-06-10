import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-products-by-id',
  templateUrl: './products-by-id.component.html',
  styleUrls: ['./products-by-id.component.css' ]
})
export class ProductsByIdComponent {
constructor(private _categoriesService:CategoriesService , private _activatedRoute:ActivatedRoute , 
  private _cartService:CartService ,   private toastr: ToastrService 
){}
ngOnInit(){
  this._activatedRoute.paramMap.subscribe((res:any)=>{
    console.log(res.get('id'))
    this.id=res.get('id')
  })
  this.showProductsById(this.id);
}
searchTerm:string=""
id!:number;
products:any[]=[]
showProductsById(id:number){
  this._categoriesService.getProductBySubId(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.products=res
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
      console.log(res.usercart1);
      this._cartService.count.next(res.usercart1)
      this.toastr.success('product added successfully!');
    },
    error:(err)=>{
      console.log(err);
      this.toastr.error(err.error , 'Error' );
      // console.log(err.error);
     
      
    }
  })
  }
  
}
