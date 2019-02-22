import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/TodoList', pathMatch: 'full' },
  { path: 'TodoList', component: ToDoListComponent },
  { path: 'AddTodo', component: AddTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
