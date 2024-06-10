import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _httpClient :HttpClient) { }
  getAllProducts():Observable<any>{
    return this._httpClient.get("http://bussinesshub.runasp.net/api/Products/AllProduct")
  }
  getProductDetailsById(id:number):Observable<any>{
   return this._httpClient.get(`http://bussinesshub.runasp.net/api/Product/${id}`)
  }
}
