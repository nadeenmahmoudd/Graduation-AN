import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvidersDetails } from 'src/app/interfaces/providers-details';
import { ServiceDetailsService } from 'src/app/services/service-details.service';
import { idText } from 'typescript';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent {
constructor(private _serviceDetailsService:ServiceDetailsService , private _activatedRoute:ActivatedRoute){}
ngOnInit(){
  this._activatedRoute.paramMap.subscribe((res:any)=>{
    console.log(res.get('id'))
    this.id=res.get('id')
  })
  this.showProviderById()
}
id:any;
// providerDetails:ProvidersDetails[]=[]
providerDetails:any
showProviderById(){
  this._serviceDetailsService.getProviderById(this.id).subscribe({
    next:(res)=>{
      console.log(res);
      this.providerDetails=res
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
