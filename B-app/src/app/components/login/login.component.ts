import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(private _authServiceService:AuthServiceService , private _router:Router){}
loginForm:FormGroup =new FormGroup({
  email :new FormControl("",[Validators.required,Validators.email]),
  // password: new FormControl("",[Validators.required,Validators.pattern(/^\w{6,}$/)])
  password: new FormControl("",[Validators.required])

})
isLoading:boolean=false;
errorMsg!: string;
// handelLoginForm(){

// }
handelLoginForm(){
  this.isLoading=true;
 this._authServiceService.signIn(this.loginForm.value).subscribe({
  next:(res)=>{
    this.isLoading=false;
    console.log(res);
    // if(res.message == "success"){
    //   localStorage.setItem('_token',res.token)
    //   this._authServiceService.getToken()
    //   this._router.navigate(['/home']);
    // }
    
  },
  error:(err)=>{
    console.log(err);
    this.isLoading=false;
    this.errorMsg=err.error.message
  }
 })
 
}
}
