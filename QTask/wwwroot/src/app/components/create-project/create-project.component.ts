import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';
import { Project } from './../../models/project';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  model: Project;

  constructor(private jobsService: ProjectService) { }

  ngOnInit(): void {
    this.model = new Project('');
  }

  createProject(): void {
    this.jobsService.createProject(this.model);
  }
}
