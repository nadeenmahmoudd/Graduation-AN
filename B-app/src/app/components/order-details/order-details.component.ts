// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { BookingService } from 'src/app/services/booking.service';

// @Component({
//   selector: 'app-order-details',
//   templateUrl: './order-details.component.html',
//   styleUrls: ['./order-details.component.css']
// })
// export class OrderDetailsComponent implements OnInit {
//   id!: number;
//   orderedProducts: any = { orderItems: [] };  // Initialize orderedProducts

//   constructor(
//     private _bookingService: BookingService,
//     private _activatedRoute: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this._activatedRoute.paramMap.subscribe((res: any) => {
//       console.log(res.get('id'));
//       this.id = +res.get('id');  // Convert id to number
//       this.getOrderDeatils();
//     });
//   }

//   getOrderDeatils(): void {
//     this._bookingService.getOrderDetailsById(this.id).subscribe({
//       next: (res) => {
//         console.log(res);
//         this.orderedProducts = res;
//         console.log(this.orderedProducts);
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { BookingService } from 'src/app/services/booking.service';

// @Component({
//   selector: 'app-order-details',
//   templateUrl: './order-details.component.html',
//   styleUrls: ['./order-details.component.css']
// })
// export class OrderDetailsComponent implements OnInit {
//   id!: number;
//   orderedProducts: any = { orderItems: [] };  // Initialize orderedProducts with an empty array

//   constructor(
//     private _bookingService: BookingService,
//     private _activatedRoute: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this._activatedRoute.paramMap.subscribe((res: any) => {
//       this.id = +res.get('id');  // Convert id to number
//       this.getOrderDeatils();
//     });
//   }

//   getOrderDeatils(): void {
//     this._bookingService.getOrderDetailsById(this.id).subscribe({
//       next: (res) => {
//         console.log('Order details received:', res);
//         this.orderedProducts = res;
//         console.log('Assigned orderedProducts:', this.orderedProducts);
//       },
//       error: (err) => {
//         console.error(err);
//       }
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  id!: number;
  orderedProducts: any = { orderItems: [] };  // Initialize orderedProducts

  constructor(
    private _bookingService: BookingService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      this.id = +res.get('id');  // Convert id to number
      this.getOrderDeatils();
    });
  }

  getOrderDeatils(): void {
    this._bookingService.getOrderDetailsById(this.id).subscribe({
      next: (res) => {
        console.log('Order details received:', res);
        if (res && res.length > 0) {
          this.orderedProducts = res[0];
        }
        console.log('Assigned orderedProducts:', this.orderedProducts);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}


