import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/data.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  theMessage:any;
  theMessageWithPath:any;
  messageDisplay = false;

  constructor(private router: Router, private route: ActivatedRoute, private welcomeService: WelcomeDataService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['name']) ;
  }

  getWelcomeMessage(){
        this.welcomeService.executeHelloWorldBeanService().subscribe(messageRes=>{
             this.handleResponse(messageRes);
             
        },
            error =>{ 
              this.handleErrorResponse(error);
            }
        );
        this.getMessageWithPathVariable();
  }

  onLogout(){
    this.router.navigate(['/login']);
  }

  handleResponse(messageRes: any){
      this.theMessage =  messageRes.message;
      this.messageDisplay = true;
  }

  handleErrorResponse(error: any){
      this.theMessage = error.error.message;
      this.messageDisplay = true;
  }

  getMessageWithPathVariable(){
    this.welcomeService.executeHelloWorldWithPathVariable("Rodriguez").subscribe(pathVariable =>{
       console.log(pathVariable);
       this.handleResponseWithPath(pathVariable);
    } 
    );
  }

  handleResponseWithPath(message:any){
    this.theMessageWithPath = message.message;
  }

}
