import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent {
  constructor( private _router:Router ,private _bookingService:BookingService){}
  loginForm:FormGroup =new FormGroup({
    companyName:new FormControl("",[Validators.required]),
    email :new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required])
  })
  isLoading:boolean=false;
  errorMsg!: string;
  handelLoginForm(){
   this._bookingService.signInVendor(this.loginForm.value).subscribe({
    next:(res)=>{
      const token = res.token;
      localStorage.setItem('token',token);
      this._bookingService.getToken()
      if (token) {
        this._bookingService.getToken()
      }
        this._router.navigate(['/request-home']);
      // this.isLoading=false;
      console.log(res);
      
    },
    error:(err)=>{
      console.log(err);
      // this.isLoading=false;
      this.errorMsg=err
    }
  //  })
  })
   }

  
}
