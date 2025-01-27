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
}
