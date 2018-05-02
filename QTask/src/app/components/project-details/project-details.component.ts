import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from './../../models/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;

  constructor(private projectService: ProjectService) { 

  }

  ngOnInit() {
    this.getProject(1);
  }

  getProject(id: number) {
    return this.projectService.getProject(id);
  }
}
