import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDetailsService } from 'src/app/services/service-details.service';
import { ShowAllServicesService } from 'src/app/services/show-all-services.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent {
constructor(private _serviceDetailsService:ServiceDetailsService,private _activatedRoute:ActivatedRoute ,private _showAllServicesService:ShowAllServicesService){}
ngOnInit(){
  this._activatedRoute.paramMap.subscribe((res:any)=>{
    console.log(res.get('id'))
    this.id=res.get('id')
  })
  this.getServiceDetails()
  this.ShowAll()
}
id:any;
providers:any;
all:any;
getServiceDetails(){
  this._serviceDetailsService.getServiceById(this.id).subscribe({
    next:(res)=>{
      console.log(res);
      this.providers=res;
      
    }
  })
}
ShowAll(){
  this._showAllServicesService.ShowAllServices().subscribe({ 
    next:(res)=>{
    console.log(res);
     this.all=res;
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
}
