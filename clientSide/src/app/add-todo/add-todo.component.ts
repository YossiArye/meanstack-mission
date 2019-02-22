import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Person } from '../person';
import { Task } from '../task';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  constructor(

    private fb: FormBuilder,
    private myServiceService: MyServiceService,
    private _router: Router
  ) { }

  selectedTask: Task;
  obj: any;
  profileForm = this.fb.group({
    description: [''],
    person: ['']
  });
  people: Person[];


  ngOnInit() {
    this.getPeople()
  }

  getPeople(): void {
    this.myServiceService.get('http://localhost:3030/people')
      .subscribe(people => this.people = people)
  }

  addTask(): void {
    this.obj = {
      "description": this.profileForm.controls["description"].value,
      "date": new Date(),
      "personID": this.profileForm.controls["person"].value
    };
    this.selectedTask = <Task>this.obj;
    this.myServiceService.post(this.selectedTask,'http://localhost:3030/tasks')
      .subscribe(() => this._router.navigate(['/TodoList']))
  }

}
