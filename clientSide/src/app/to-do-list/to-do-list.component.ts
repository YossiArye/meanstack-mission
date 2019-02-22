
import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { MyServiceService } from '../my-service.service';
import { Tasks_person } from '../tasks_person';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  tasks: Task[];
 
  tasks_person: Tasks_person[];

  constructor(private myServiceService: MyServiceService) { }

  ngOnInit() {
    this.todoList();
  }

  getTasks(): void {
    this.myServiceService.get('http://localhost:3030/tasks')
      .subscribe(tasks => this.tasks = tasks);
  }

  todoList(): void {
    this.myServiceService.get('http://localhost:3030/taskPerson')
    .subscribe(tasks_person => this.tasks_person = tasks_person);
  }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.myServiceService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.myServiceService.deleteHero(hero).subscribe();
  // }

}