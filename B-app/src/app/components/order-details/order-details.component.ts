import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
constructor(private _bookingService:BookingService , private _activatedRoute:ActivatedRoute){}
ngOnInit(){
  this._activatedRoute.paramMap.subscribe((res:any)=>{
    console.log(res.get('id'))
    this.id=res.get('id')
  })
  this.getOrderDeatils()
}
id!:number
orderedProducts:any
getOrderDeatils(){
  this._bookingService.getOrderDetailsById(this.id).subscribe({
    next:(res)=>{
      console.log(res);
      this.orderedProducts=res
      console.log(this.orderedProducts);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
