import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
constructor(private _bookingService:BookingService){}
userOrders:any;
userSessions:any
ngOnInit(){
  this.getAllOrders();
}
getAllOrders(){
  this._bookingService.getAllOrders().subscribe({
    next:(res)=>{
      console.log("ana el orders");
      console.log(res);
    this.userOrders=res
    },
    error:(err)=>{
console.log(err);

    }
  })
}

}
