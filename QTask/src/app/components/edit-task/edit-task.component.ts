import { Component, OnInit } from '@angular/core';
import { Task } from './../../models/task';
import { TaskService } from '../../services/task.service';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    let result = this.getTask(1);
  }

  getTask(id: number) {
    return this.taskService.getTask(id);
  }

  updateTask(): void {
    this.taskService.updateTask(this.task);
  }
}
