import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIKeyAdderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const subscriptionKey = "abf0638effd54b229f79e147d6b06699";
    return next.handle(request.clone({
      headers: request.headers.set('Ocp-Apim-Subscription-Key', subscriptionKey)
    }));
  }
}
