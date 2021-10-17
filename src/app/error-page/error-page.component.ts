import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage = 'Error Page. Please Contact #1234.********';
  
  constructor() { }

  ngOnInit(): void {
  }

}
