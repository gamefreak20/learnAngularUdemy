import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (req.url)
    console.log('Request');
    const modifiedReq = req.clone(
      {
        headers: req.headers.append('Auth', 'xyz')
      }
    );
    return next.handle(modifiedReq);
  }
}
