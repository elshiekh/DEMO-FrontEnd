import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApphttpInterceptorInterceptor implements HttpInterceptor {
  secretKey: string = environment.secretKeys;
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    const authReq = request.clone({
      setHeaders: {
        'Authorization': '04577BA6-3E32-456C-B528-E41E20D28D79'
      }
      // headers: new HttpHeaders({
      //   'Content-Type':  'application/json',
      //   'Authorization': '04577BA6-3E32-456C-B528-E41E20D28D79'
      // })
    });
    console.log('Intercepted HTTP call', authReq);
    return next.handle(request);
  }
}
