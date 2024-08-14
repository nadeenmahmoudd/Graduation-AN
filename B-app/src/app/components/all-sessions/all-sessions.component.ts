// import { Component } from '@angular/core';
// import { BookingService } from 'src/app/services/booking.service';

// @Component({
//   selector: 'app-all-sessions',
//   templateUrl: './all-sessions.component.html',
//   styleUrls: ['./all-sessions.component.css']
// })
// export class AllSessionsComponent {
// constructor(private _bookingService:BookingService){}

// ngOnInit(){
//   this.getAllSessions();
// }
// userBookings:any
// isBookedSession:boolean=false
// getAllSessions(){
//   this._bookingService.getAllBookedSessions().subscribe({
//     next:(res)=>{
//       console.log("ana el sessions");
//       console.log(res);
//       this.isBookedSession=true
      
// this.userBookings=res   
// // this.NoSessions = this.userBookings.length === 0;   
      
//     },
//     error:(err)=>{
//       console.log(err);
      
//     }
//   })
// }
// }

import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-all-sessions',
  templateUrl: './all-sessions.component.html',
  styleUrls: ['./all-sessions.component.css']
})
export class AllSessionsComponent {
  userBookings: any[] = [];
  isBookedSession: boolean = false;

  constructor(private _bookingService: BookingService) {}

  ngOnInit() {
    this.getAllSessions();
  }

  getAllSessions() {
    this._bookingService.getAllBookedSessions().subscribe({
      next: (res) => {
        console.log("ana el sessions");
        console.log(res);
        this.userBookings = res;

        // Set isBookedSession to true if there are bookings, false if not
        this.isBookedSession = this.userBookings.length > 0;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
