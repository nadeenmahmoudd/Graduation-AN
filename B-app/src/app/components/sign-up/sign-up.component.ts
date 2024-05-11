import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private authServiceService:AuthServiceService ,private _router:Router){}
  errorMsg!: string;
  isLoading:boolean=false;
SignUpForm:FormGroup=new FormGroup({
  name:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required , Validators.email]),
  // password: new FormControl("",[Validators.required ,Validators.pattern(/^\w{6,}$/)]),
  // repassword: new FormControl("",[Validators.required ,Validators.pattern(/^\w{6,}$/)]),

  password: new FormControl("",[Validators.required ]),
  confirmPassword: new FormControl("",[Validators.required]),
  address:new FormControl("",[Validators.required])
})
// handelSignUpForm(){
// }
handelSignUpForm(){
  this.isLoading=true;
 this.authServiceService.signUp(this.SignUpForm.value).subscribe({
  next:(res)=>{
    this.isLoading=false
    console.log(res);
    // if(res.message == "success")
    this._router.navigate(['/login']);
  },
  error:(err)=>{
    this.isLoading=false
    console.log(err);
   
    this.errorMsg=err.error
  }
 })
}
}
