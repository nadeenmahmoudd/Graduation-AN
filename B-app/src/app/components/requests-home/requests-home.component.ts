import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-requests-home',
  templateUrl: './requests-home.component.html',
  styleUrls: ['./requests-home.component.css']
})
export class RequestsHomeComponent {
 constructor(private _bookingService:BookingService ){}
 sessions:any;
 isEmpty:boolean=true;
 ngOnInit(){
  this.getAllBookingSessions();
 }
 userId:any
 id!:number
 getAllBookingSessions(){
  this._bookingService.getBookedSession().subscribe({
    next:(res)=>{
      this.isEmpty=false;
      console.log(res);
      this.sessions=res
      this.userId=res.userId
      this.id=res.id
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
 }

 removeSession(id:number){
  this._bookingService.removeBookedSession(id).subscribe({
    next:(res)=>{
      console.log(res);
     this.sessions=res
      console.log("deleted");
      // this.isCartEmpty = this.products.length === 0;
    
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
}
