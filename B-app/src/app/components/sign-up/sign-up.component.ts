import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
SignUpForm:FormGroup=new FormGroup({
  email:new FormControl("",[Validators.required , Validators.email]),
  password: new FormControl("",[Validators.required ,Validators.pattern(/^\w{6,}$/)]),
  repassword: new FormControl("",[Validators.required ,Validators.pattern(/^\w{6,}$/)])
})
handelSignUpForm(){

}
}
