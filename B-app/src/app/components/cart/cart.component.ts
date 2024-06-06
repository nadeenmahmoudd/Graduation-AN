import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor( private _cartService:CartService , private _activatedRoute:ActivatedRoute){}
ngOnInit(){
  
  this.showUserCart()
 this._activatedRoute.paramMap.subscribe((res:any)=>{
      console.log(res.get('id'))
      this.id=res.get('id')
    })
    this._activatedRoute.params.subscribe(params=>{
      const id= params['id'];
      this.removeItem(this.id)
})
}

  id:any;
  count!:number ;
 totalPrice!:number;
products:Products[] | any[]=[]
isCartEmpty: boolean = true;
showUserCart(){
  this._cartService.getUserCart().subscribe({
    next:(res)=>{
      console.log(res);
      this.products=res.list
     this.totalPrice=res.totalPrice
      this.count=res.usercart1
      this.isCartEmpty = this.products.length === 0;
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
cart:any;
removeItem(id:number){
  this._cartService.removeItem(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.products=res
      console.log("deleted");
      this.isCartEmpty = this.products.length === 0;
    
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
updateCart(id:number , quantity:number){
  if(quantity >0){
   this._cartService.updateCartProductQuantity(id,quantity).subscribe({
     next:(res)=>{
 console.log(res);
 this.products=res.list // de 3ashan nekhale el cart tesawy el cart el gededa bel taghyrat el feha
 this.totalPrice=res.totalPrice 
     },
     error:(err)=>{
 console.log(err);
 
     }
   })
  }
  else{
   this.removeItem(id)
   
  }
 }

}
