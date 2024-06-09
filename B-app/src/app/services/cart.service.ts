import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  count:BehaviorSubject<number>=new BehaviorSubject(0)
  constructor(private _httpClient:HttpClient) { 
    this.getUserCart().subscribe({
     next:(res)=>{
       this.count.next(res.usercart1)
     }
   })
  }
getUserCart():Observable<any>{
  const token: any= localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
return this._httpClient.get('http://bussinesshub.runasp.net/api/Cart/userCart' ,{headers});
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
  const token: any= localStorage.getItem('token');
  //   const decodedToken: { sub: any; id: any; } = jwtDecode(token);
  //   console.log(decodedToken.id);
  //  const userId= decodedToken.id
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  console.log(headers);
  return this._httpClient.post<any>(`http://bussinesshub.runasp.net/api/Cart/AddToCart?productId=${id}`, {},{headers}
) .pipe(
  catchError((error: HttpErrorResponse) => {
    let errorMessage = 'An error occurred while processing your request.';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${error.status} - ${error.error}`;
    }
    // You can log the error message or display it to the user
    console.error(errorMessage);
    // Return an observable with a user-friendly error message
    return throwError(errorMessage);
  })
);
}
removeItem(id:any):Observable<any>{
  const token: any= localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
return this._httpClient.delete(`http://bussinesshub.runasp.net/api/Cart?id=${id}`,{headers});
}
updateCartProductQuantity(id:number , quantity:number):Observable<any>{
  const token: any= localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
return this._httpClient.put(`http://bussinesshub.runasp.net/api/Cart/updateQuantity?id=${id}&quantity=${quantity}` 
,{ headers }
)
}
}
