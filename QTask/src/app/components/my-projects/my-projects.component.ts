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

    async getProjects(): void {
        this.projects = await this.projectService.getProjects();
    }
}
