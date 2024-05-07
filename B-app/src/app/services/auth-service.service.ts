import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private _httpClient:HttpClient) { }
  signIn(userData:object):Observable<any>{
    return this._httpClient.post(`http://bussinesshub.runasp.net/api/Account/api/Account/Login`,userData)
  }
  signUp(userData:object):Observable<any>{
    return this._httpClient.post(`http://bussinesshub.runasp.net/api/Account/api/Account/Registration`,userData)
  }
  getToken(){
    const encode =localStorage.getItem('_token')
    if(encode){
      const decode = jwtDecode(encode)
      console.log(decode)
    }
  }
}
