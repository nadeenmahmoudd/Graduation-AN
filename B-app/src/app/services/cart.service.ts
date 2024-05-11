import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jsonwebtoken';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _httpClient:HttpClient) { }

//   addToCart(id:number):Observable<any>{
//     // const headers = new HttpHeaders().set('Authorization',` Bearer ${token}`);
//     //  const headers = new HttpHeaders({
//    //   'Authorization': `Bearer ${token}`
//    // });
//     // const token = localStorage.getItem('token');
//     // const httpOptions = {
//     //   headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
//     // };
//     // return this.http.post('/api/Cart/AddToCart', { productId }, { headers });
// return this._httpClient.post(`http://bussinesshub.runasp.net/api/Cart/AddToCart?productId=${id}`,
//  {
//   headers:{
// token :`${localStorage.getItem('token')}`
//   }
// }
// );
getCart():Observable<any>{
  return this._httpClient.get('http://bussinesshub.runasp.net/api/Cart');
  }

// addToCart(id: number): Observable<any> {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     throw new Error('No token found in localStorage');
//     // Or redirect to login if you prefer
//   }

//   console.log('Retrieved token:', token); // Log the token to console

//   const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` }) 
// // console.log(headers.get(token));


//   return this._httpClient.post<any>(`http://bussinesshub.runasp.net/api/Cart/AddToCart?productId=${id}&quantity=1` ,{}
//     ,{ headers }
   
//   );
// }




addToCart(id: number ): Observable<any> {
  
  const encode = localStorage.getItem('token');
if (encode) {
  const decode = jwtDecode(encode);
  const email = decode.sub
  // console.log(decode);  
}
// userId:"3c9e9e0d-485d-4565-9fcb-0b89be118751"
  //     const token = localStorage.getItem('token');
  // const options = {
  //   withCredentials: true // Include cookies in the request
  // };
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this._httpClient.post<any>(`http://bussinesshub.runasp.net/api/Cart/AddToCart?productId=${id}&user=746583965825789`, {},{headers}
  
  // {headers:{
  //   token:`${localStorage.getItem('token')}`
  // }}
);
}
  
}








// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor(private http: HttpClient) { }

//   addToCart(productId: number) {
//     return this.http.post('http://bussinesshub.runasp.net/api/Cart/AddToCart', productId );
//   }
// }





// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor(private _httpClient: HttpClient) { }

//   addToCart(id: number): Observable<any> {
//     const headers = new HttpHeaders().set('token',`${localStorage.getItem('token')}`);
    
//     return this._httpClient.post(`http://bussinesshub.runasp.net/api/Cart/AddToCart?productId=${id}`, 
//     {}, { headers });
//   }
// }
