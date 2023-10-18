import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const cloneRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 1234'
      }
    });

    return next.handle(cloneRequest);
  }
}
