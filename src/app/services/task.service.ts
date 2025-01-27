import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';
import { nanoid } from 'nanoid';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { id: nanoid(), title: 'Apprendre Angular', completed: false },
    { id: nanoid(), title: 'Créer une TaskList', completed: false }
  ];

  constructor() { }



  getTasks(): Task[] {
    return this.tasks;
  }

  toggleTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  addTask(title: string): void {
    if (title.trim().length >= 3 && title.trim().length <= 50) {
      const newTask: Task = {
        id: nanoid(),
        title: title.trim(),
        completed: false
      };
      this.tasks = [...this.tasks, newTask];

    }
  }
}
