import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task!: Task;
  @Output() toggleEvent = new EventEmitter<Task>();
  @Output() deleteEvent = new EventEmitter<Task>();

  onToggle(): void {
    this.toggleEvent.emit(this.task);
  }

  onDelete(): void {
    this.deleteEvent.emit(this.task);
  }

}
