import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private _httpClient: HttpClient) {}
  bookSession(providerId: number, code: any): Observable<any> {
    const token: any = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._httpClient
      .post(
        `http://bussinesshub.runasp.net/api/Booking?providerId=${providerId}&code=${code}`,
        { headers }
      )
      .pipe(
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
  getBookedSession(): Observable<any> {
    const token: any = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._httpClient.get(
      'http://bussinesshub.runasp.net/api/Booking/GetBookingofEachprovider',
      { headers }
    );
  }
  signInVendor(userData: object): Observable<any> {
    return this._httpClient
      .post(
        `http://bussinesshub.runasp.net/api/Account/api/Account/Login`,
        userData
      )
      .pipe(
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
  getToken(): string | null {
    const encode = localStorage.getItem('token');
    if (encode) {
      const decode = jwtDecode(encode);
      console.log(decode);
    }
    return null;
  }
  checkOutSession(secNum: number, address: string): Observable<any> {
    const token: any = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._httpClient.post(
      `http://bussinesshub.runasp.net/api/Cart/checkout?secNum=${secNum}&address=${address}`,
      { headers }
    );
  }
  getAllOrders():Observable<any>{
    const token: any = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._httpClient.get("http://bussinesshub.runasp.net/api/Cart/GetUserOrder" , {headers})
  }
  getOrderDetailsById(id:number):Observable<any>{
    return this._httpClient.get(`http://bussinesshub.runasp.net/api/Cart/GetUserOrderById?id=${id}`)
  }
  getAllBookedSessions():Observable<any>{
    const token: any = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._httpClient.get("http://bussinesshub.runasp.net/api/Booking/GetUserbooking" , {headers})
  }
  getDiscountCode():Observable<any>{
    return this._httpClient.get("http://bussinesshub.runasp.net/api/Booking/selectCode")
  }
  removeBookedSession(id:number):Observable<any>{
  return this._httpClient.delete(`http://bussinesshub.runasp.net/api/Booking/deleteBookingItem?id=${id}`)
  }
  
}
