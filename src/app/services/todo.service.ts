import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'First Task',
        completed: true
      },
      {
        id: 2,
        title: 'Second Task',
        completed: true
      },
      {
        id: 3,
        title: 'Third Task',
        completed: false
      }
    ]
  }
}
