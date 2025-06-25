import { Component } from '@angular/core';
import { TodoFormComponnent } from './ui/todo-form.component';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'app-home',
  template: `
  <h2>This is the home component</h2>
  <app-todo-form (todoSubmitted)="createTodo($event)"/>
  `,
  imports: [TodoFormComponnent],
})
export default class HomeComponent {
  createTodo(todo: Todo){
    console.log(todo);
  }
}