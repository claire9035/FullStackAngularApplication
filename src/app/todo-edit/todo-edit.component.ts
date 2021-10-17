import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../listtodos/listtodos.component';
import { WelcomeDataService } from '../service/data/data.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  id!: number;
  todo!: Todo;
 
  constructor(private dataService: WelcomeDataService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'','',false,new Date());
    if(this.id != -1){
      this.dataService.retrieveTodos(this.id).subscribe((data)=>{
        this.todo = data;
    });
    }
    
  }

  saveTodo(){
    if(this.id === -1){
      this.dataService.createTodo(this.todo);
      this.router.navigate(['/todos']);
    }else{
      this.dataService.updateTodo(this.id, this.todo);
      this.router.navigate(['/todos']);
    }
    
  }

}
