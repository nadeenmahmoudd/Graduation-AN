import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-vendor',
  templateUrl: './navbar-vendor.component.html',
  styleUrls: ['./navbar-vendor.component.css']
})
export class NavbarVendorComponent {
  constructor(private _router:Router){}
  signOut(){
    localStorage.removeItem('token');
    this._router.navigate(['/login'])
  }
}
