import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from 'src/app/listtodos/listtodos.component';

export class HelloWorldBean{
  constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  userListUpdates = new Subject();
  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
     return this.http.get<HelloWorldBean>('http://localhost:9090/SampleSpringApp/hello-world-bean');
  }

  executeHelloWorldWithPathVariable(name: any){
       return this.http.get(`http://localhost:9090/SampleSpringApp/hello-world/path-variable/${name}`);
  }

 


  displayListOfToDo(){
    return this.http.get<Todo[]>('http://localhost:9090/SampleSpringApp/jpa/users/todos');
  }



  deleteTodos(id: any){
      this.http.delete(`http://localhost:9090/SampleSpringApp/jpa/delete/users/todos/${id}`).subscribe(()=>{
        this.informList();
      });
  }



  retrieveTodos(id: any){
    return this.http.get<Todo>(`http://localhost:9090/SampleSpringApp/jpa/users/todos/${id}`);
}

 updateTodo(id: any, todo: any){
   this.http.put(`http://localhost:9090/SampleSpringApp/jpa/update/users/todos/${id}`, todo).subscribe(()=>{

   });
 }

 createTodo(todo:any){
   this.http.post('http://localhost:9090/SampleSpringApp/jpa/add/users/todos/', todo).subscribe(()=>{
     this.informList();
   });
 }

informList(){
    this.userListUpdates.next();
  }

}
