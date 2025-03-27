import {
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  
  const token = localStorage.getItem('token');

  
  if (!token) {
    return next(req);
  }

  
  let headers = req.headers.set('Authorization', `Bearer ${token}`);

 
  if (req.method === 'PATCH') {
    headers = headers.set('Content-Type', 'application/merge-patch+json');
  }

 
  const newReq = req.clone({ headers });

  
  return next(newReq);
}