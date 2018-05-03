import { Component, OnInit } from '@angular/core';
import { Task } from './../../models/task';
import { User } from './../../models/user';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task: Task;

  constructor(private taskService: TaskService) {
    this.task = new Task('', '', '', 1, 1);
   }

  ngOnInit() {
  }

  createProject(): void {
    this.taskService.createTask(this.task);
  }
}
