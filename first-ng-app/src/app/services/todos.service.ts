import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      title: 'Groceries',
      id: 0,
      userId: 1,
      completed: false
    },
    {
      title: 'Car wash',
      id: 1,
      userId: 1,
      completed: false
    }
  ]
  constructor() { }
}
