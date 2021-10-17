import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicAuth: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    let basicAuthHeaderString = this.basicAuth.getAuthenticatedToken();   
    let  username = this.basicAuth.getAuthenticatedUsser();

    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      });
    }
    return next.handle(request);

    

  }



}

  