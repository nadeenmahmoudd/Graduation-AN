
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

 
  ngOnInit(): void {

  }
   images:string[]=["assets/images/Home/step1.png","assets/images/Home/step2.png","assets/images/Home/step3.png","assets/images/servicePoster1-removebg-preview.png","assets/images/servicePoster2-removebg-preview.png",""]

}
