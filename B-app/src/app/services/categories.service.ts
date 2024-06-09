import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private _httpClient:HttpClient) { }
  getAllCategories():Observable<any>{
return this._httpClient.get("http://bussinesshub.runasp.net/api/Category/categoryGetAll")
  }
  getCategoryById(id:number):Observable<any>{
    return this._httpClient.get(`http://bussinesshub.runasp.net/api/Category/categoryGetById/${id}`)
  }
  
  getProductBySubId(id:number) :Observable<any>{
 return this._httpClient.get(`http://bussinesshub.runasp.net/api/SubCategory/GetProductsBySubId/${id}`)
  }
}
