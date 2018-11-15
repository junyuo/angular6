import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../shared/todo-item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  items: TodoItem[];

  constructor() { }

  ngOnInit() {
  }

}
