import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // On request
    const start = Date.now();
    return next.handle(request).pipe(
      finalize(() => {
        // On response
        const end = Date.now();
        console.log(`${request.method} ${request.url} (${end - start}ms)`);
      })
    );
  }
}
