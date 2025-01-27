import { Component } from '@angular/core';
import { Task } from '../../models/task.interface';
import { TaskService } from '../../services/task.service';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, TaskFormComponent, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }


  toggleTask(task: Task): void {
    this.taskService.toggleTask(task);
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
    this.tasks = this.taskService.getTasks();
  }

  onNewTask(title: string): void {
    this.taskService.addTask(title);
    this.tasks = this.taskService.getTasks();
  }



}
