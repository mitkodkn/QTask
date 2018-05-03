import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';
import { Project } from './../../models/project';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  project: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.project = new Project('', '', 1);
  }

  createProject(): void {
    this.projectService.createProject(this.project);
  }
}
