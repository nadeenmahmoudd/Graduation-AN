import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-requests-home',
  templateUrl: './requests-home.component.html',
  styleUrls: ['./requests-home.component.css']
})
export class RequestsHomeComponent {
 constructor(private _bookingService:BookingService){}
 sessions:any
 ngOnInit(){
  this.getAllBookingSessions();
 }
 getAllBookingSessions(){
  this._bookingService.getBookedSession().subscribe({
    next:(res)=>{
      console.log(res);
      this.sessions=res
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
 }
}
