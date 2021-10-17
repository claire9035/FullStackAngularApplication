import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/data.service';


export class Todo{
  constructor(
    public id: number, 
    public username: string,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {
  message: string = '';
  employ: any;
  todos: Todo[]=[];

  constructor(private dataService: WelcomeDataService,private router: Router) { }

  ngOnInit(): void {
      this.dataService.userListUpdates.subscribe(()=>{
       this.displayList();
    
      });
      this.displayList();
   
  }

  displayList(){
    this.dataService.displayListOfToDo().subscribe(data=>{
      this.todos = data;
    });
  }

  
  updateListOfTodo(todo:any){
    this.router.navigate(['/todos/' + todo.id]);
  }

  addTodo(){
    this.router.navigate(['/todos/' +-1]);
  }

  deleteListOfTodo(id:any){
       this.dataService.deleteTodos(id);
       this.message = `Id #${id} successfully deleted!!!`;
  }



}
