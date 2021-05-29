import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  getTask = '';
  editedTask = '';
  errorMessage = '';
  list : Todo[] = [];

  printTask() {
    if(this.getTask == '') {
      this.errorMessage = "Enter something first!";
      return;
    }
    this.errorMessage = '';
    const task : Todo = {
      id : Date.now(),
      taskValue : this.getTask,
      isDone : false
    }
    this.list.push(task);
    this.getTask = '';
  }

  deleteTask(id:number) {
    this.list = this.list.filter(item => item.id != id);
  }

  editTask(taskNo:Todo) {
     let result = prompt("Edit the task", taskNo.taskValue);
     let index = this.list.indexOf(taskNo);
     if(result !== null && result !== '') {
      this.list[index].taskValue = result;
     }
  }

}
