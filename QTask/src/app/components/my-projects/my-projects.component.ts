import { Component, OnInit } from '@angular/core';
import { Project } from './../../models/project';
import { ProjectService } from './../../services/project.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
    projects: Project[];

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
      this.getProjects();
    }

    getProjects(): void {
      this.projects = this.projectService.getProjects();
    }
}
