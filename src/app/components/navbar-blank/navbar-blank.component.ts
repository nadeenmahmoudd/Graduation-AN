import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.css']
})
export class NavbarBlankComponent {
  constructor(private _router:Router , private _cartService:CartService){}
  signOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('_token')
    sessionStorage.removeItem('token')
    this._router.navigate(['/login'])
   
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/user';
    
  }
  numberOfItems:number=0
  ngOnInit(){
    this._cartService.count.subscribe((res)=>{
      this.numberOfItems=res
    })
  }
}
