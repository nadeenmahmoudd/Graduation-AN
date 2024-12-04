import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
  userOrders: any[] = [];
  isOrdered: boolean = false;

  constructor(private _bookingService: BookingService) {}

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this._bookingService.getAllOrders().subscribe({
      next: (res) => {
        console.log("ana el orders");
        this.userOrders = res;

        // Set isOrdered to true if there are orders, false if not
        this.isOrdered = this.userOrders.length > 0;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
