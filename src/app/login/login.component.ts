import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
   @ViewChild('formDetails') userForm!: NgForm;
   errorMessage = 'Invalid Credentials';
   invalidCredentials = false;

   constructor(private router: Router, private auth: HardcodedAuthenticationService, private basicAuth: BasicAuthenticationService){};

   handelBasicAuthLogin(formDetails: any){
    const details = formDetails.value;
    this.basicAuth.executeAuthenticationService(details.username, details.password).subscribe( data =>{
       this.router.navigate(['/welcome-page/' + details.username])
       this.invalidCredentials = false;
    },
      error =>{
        this.invalidCredentials = true;
      }
    )


    this.userForm.reset();
 }
}
