import { Component, inject } from '@angular/core';
import { TodoFormComponnent } from './ui/todo-form.component';
import { Todo } from '../shared/interfaces/todo';
import { TodoService } from '../shared/interfaces/data=access/todo.service';
import { TodoListComponent } from "./ui/todo-list.component";

@Component({
  selector: 'app-home',
  template: `
  <h2>This is the home component</h2>
  <app-todo-list [todos]="todoService.todos()"/>
  <app-todo-form (todoSubmitted)="todoService.addTodo($event)"/>
  `,
  imports: [TodoFormComponnent, TodoListComponent,TodoListComponent],
})
export default class HomeComponent {

  todoService = inject(TodoService);
 
}