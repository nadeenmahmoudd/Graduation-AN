import { Component } from '@angular/core';
import { Services } from 'src/app/interfaces/services';
import { ShowAllServicesService } from 'src/app/services/show-all-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
constructor(private _showAllServicesService:ShowAllServicesService){}
images:string[]=["../../../assets/images/MarkeingA.jpeg" , "../../../assets/images/accountingA.jpeg", "../../../assets/images/logisticsA.jpeg", 
  "../../../assets/images/consultA.jpeg"] 
isLoading:boolean=false;
all: Services[]=[]
ngOnInit(){
  this.ShowAll()
}
ShowAll(){
  this.isLoading=true;
  this._showAllServicesService.ShowAllServices().subscribe({ 
    next:(res)=>{
      this.isLoading=false;
    console.log(res);
     this.all=res;
    },
    error:(err)=>{
      this.isLoading=false;

      console.log(err);
    }
  })
}

}
