import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-requests-home',
  templateUrl: './requests-home.component.html',
  styleUrls: ['./requests-home.component.css']
})
export class RequestsHomeComponent {
 constructor(private _bookingService:BookingService , private _cartService:CartService){}
 sessions:any;
 isEmpty:boolean=true;
 ngOnInit(){
  this.getAllBookingSessions();
 }
 userId:any
 getAllBookingSessions(){
  this._bookingService.getBookedSession().subscribe({
    next:(res)=>{
      this.isEmpty=false;
      console.log(res);
      this.sessions=res
      this.userId=res.userId
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
 }

 removeItem(userId:any){
  this._cartService.removeItem(userId).subscribe({
    next:(res)=>{
      console.log(res);
     
      console.log("deleted");
      // this.isCartEmpty = this.products.length === 0;
    
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
}
