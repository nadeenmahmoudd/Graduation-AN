import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.css']
})
export class NavbarBlankComponent {
  signOut(){
    localStorage.removeItem('_token')
    // this._router.navigate(['/login'])
  }
}