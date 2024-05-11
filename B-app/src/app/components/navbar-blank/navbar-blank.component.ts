import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.css']
})
export class NavbarBlankComponent {
  constructor(private _router:Router){}
  signOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('_token')
    sessionStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
}
