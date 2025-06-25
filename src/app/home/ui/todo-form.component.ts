import { Component, inject, output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule,Validators } from "@angular/forms";
import { Todo } from '../../shared/interfaces/todo';

@Component({
    selector:'app-todo-form',
    template: `
            <form [formGroup] = "todoForm" (ngSubmit) = "todoSubmitted.emit(todoForm.getRawValue())">
                
                <input type="text" formControlName="title" placeholder="title..."/>
                <input type="text" formControlName="description" placeholder="description..."/>
                <button [disabled]="!todoForm.valid" type="submit">Add To Do</button>
            </form>
            `,
    imports:[ReactiveFormsModule],
     
})

export class TodoFormComponnent {
    private fb = inject(FormBuilder);

    //validatiors.required makes the title a required field
    todoForm = this.fb.nonNullable.group({
        title: ['',Validators.required],
        description:[''],
    });
    
    todoSubmitted = output<Todo>();
}