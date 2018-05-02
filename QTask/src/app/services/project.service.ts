import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Project } from './../models/project';

@Injectable()
export class ProjectService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    private projects = [
        new Project("NEznam1"),
        new Project("NEznam2"),
        new Project("NEznam3"),
        new Project("NEznam4"),
        new Project("NEznam5"),
        new Project("NEznam6"),
        new Project("NEznam7"),
        new Project("NEznam8"),
    ] 

    constructor(private http: Http, private router: Router) {
    }

    createProject(project: Project): any {
        return this.http
            .post('/api/projects', JSON.stringify(project), this.options)
            .toPromise()
            .then(response =>{
              //  this.router.navigateByUrl('/jobs');
                alert("You have created project successfully.");
                response.json().data 
            })
            .catch(er => alert(JSON.parse(er._body).error));
    }

    getProjects(): any {
        return this.projects;
        // return this.http
        //     .get('/api/projects', this.options)
        //     .toPromise()
        //     .then(response =>{
        //       //  this.router.navigateByUrl('/jobs');
        //         alert("You have created project successfully.");
        //         return response.json().data 
        //     })
        //     .catch(er => alert(JSON.parse(er._body).error));
    }
}