import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private loaderService:LoaderService) {}
  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   this.loaderService.show();
  //   let newRequest = request.clone({
  //     headers: request.headers.set("token", `${localStorage.getItem('token')}`)
  //   })
  //   return next.handle(newRequest).pipe(
  //     finalize(() => this.loaderService.hide()),);
  // }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show()
    const token :any= localStorage.getItem('token');
    const modifiedRequest = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
        return next.handle(modifiedRequest).pipe(
          finalize(() => this.loaderService.hide()),);
  }
}
