import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: any, password: any){
    if(username === "claire9035" && password === "2468"){
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('aunthenticaterUser');
    sessionStorage.clear();
  }
}
