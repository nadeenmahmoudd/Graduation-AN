import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowAllServicesService {
ngOnInit(){
  this.ShowAllServices()
}
  constructor(private _httpClient:HttpClient) { }
  ShowAllServices():Observable<any>{
return this._httpClient.get("http://bussinesshub.runasp.net/api/Services/AllService")
  }
}
