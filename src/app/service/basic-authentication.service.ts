import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username: any, password: any){
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    let header = new HttpHeaders({
      Authorization: basicAuthString
    })
    return this.http.get<AuthenticationBean>(`http://localhost:9090/SampleSpringApp/basic-auth`,{headers: header}).pipe(
      map(
        data => {
         sessionStorage.setItem('authenticaterUser',username);
         sessionStorage.setItem('token',basicAuthString);
         return data;
        }
      )
   );
  }
 
   
  getAuthenticatedUsser(){
   return sessionStorage.getItem('authenticaterUser');
  }

  getAuthenticatedToken(){
    //if(this.getAuthenticatedUsser())
    return sessionStorage.getItem('token');
  }



  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('aunthenticaterUser');
    sessionStorage.removeItem('token');
    sessionStorage.clear();
  }
}


export class AuthenticationBean{
  constructor(public message:string){}
}
