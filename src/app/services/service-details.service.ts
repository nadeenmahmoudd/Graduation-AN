import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailsService {

  constructor(private _httpClient:HttpClient) { }
  getServiceById(id:any):Observable<any>{
   return this._httpClient.get(`http://bussinesshub.runasp.net/api/Service/${id}`)
  }
getProviderById(id:number):Observable<any>{
  return this._httpClient.get(`http://bussinesshub.runasp.net/api/Provider/${id}`)
}
}
