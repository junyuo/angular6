import { Component } from '@angular/core';
import { TodoItem } from './shared/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-cribs';

  todoItems: TodoItem[] = [
    { id: 1, value: 'todo 1', done: false },
    { id: 2, value: 'todo 2', done: false },
    { id: 3, value: 'todo 3', done: false }
  ];

  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

}
