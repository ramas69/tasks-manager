import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  @Output() newTaskEvent = new EventEmitter<string>();
  
  newTaskTitle = '';
  formSubmitted = false;

  addTask(): void {
    this.formSubmitted = true;
    
    if (this.validateTaskTitle(this.newTaskTitle)) {
      this.newTaskEvent.emit(this.newTaskTitle);
      this.resetForm();
    }
  }

  public validateTaskTitle(title: string): boolean {
    return title.trim().length >= 3 && title.trim().length <= 50;
  }

  private resetForm(): void {
    this.newTaskTitle = '';
    this.formSubmitted = false;
  }

}
