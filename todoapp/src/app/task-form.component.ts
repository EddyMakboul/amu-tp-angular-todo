import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-task-form",
    template: `
        <form (ngSubmit)="onSubmit()" [formGroup]="form">
            <input
              formControlName="text"
              type="text"
              name="todo-text"
              placeholder="Ajouter une tâche"
            />
            <button>Ajouter</button>
        </form>
    `
})
export class TaskFormComponent {

  @Output()
  onNewTask = new EventEmitter<string>();

  form = new FormGroup({
      text: new FormControl()
  });

  onSubmit() {

    this.onNewTask.emit(this.form.value.text);
    console.log(this.form.value.text);
    this.form.setValue({
        text: ''
    });
  }
}
