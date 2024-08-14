import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { ServiceDetailsService } from 'src/app/services/service-details.service';

@Component({
  selector: 'app-book-service-form',
  templateUrl: './book-service-form.component.html',
  styleUrls: ['./book-service-form.component.css' ]
})
export class BookServiceFormComponent {
constructor( private _bookingService:BookingService , private _serviceDetailsService:ServiceDetailsService,
   private _activatedRoute:ActivatedRoute){
  this._activatedRoute.paramMap.subscribe((res:any)=>{
    console.log(res.get('id'))
    this.providerId=res.get('id')
  })
}
code: string="";
discountCode:string=""
errorMsg:string=""
providerId:any;
 isBooked:boolean=true;
 notbookedDiv:boolean=false;
BookingForm:FormGroup=new FormGroup({

  code:new FormControl("",[Validators.required])
  
})
handelBookingForm(providerId:number,code:any){
this._bookingService.bookSession(providerId,code).subscribe({
  next:(res)=>{
    console.log(res);
    this.isBooked=false;
  },
  error:(err)=>{
    this.notbookedDiv=true;
    console.log(err);
    
  }
})
}
generateDiscountCode(){
  this._bookingService.getDiscountCode().subscribe({
    next:(res)=>{
      console.log(res);
this.code=res.bookingCode
    },
    error:(err)=>{
      console.log(err);
      this.errorMsg ="Internal server error "
      // this.errorMsg="internal server error"
    }
  })
}
}
