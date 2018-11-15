import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor() { }

  @Output() addTodoItem = new EventEmitter();
  text: string;

  ngOnInit() {
  }

  addOne() {
    console.log(this.text);
  }

}
