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
        new Project("NEznam1", "asdfasdf", 1),
        new Project("NEznam2", "asdfasdf", 1),
        new Project("NEznam3", "asdfasdf", 1),
        new Project("NEznam4", "asdfasdf", 1),
        new Project("NEznam5", "asdfasdf", 1),
        new Project("NEznam6", "asdfasdf", 1),
        new Project("NEznam7", "asdfasdf", 1),
        new Project("NEznam8", "asdfasdf", 1),
    ] 

    constructor(private http: Http, private router: Router) {
    }

    createProject(project: Project): any {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        project.managerId = user.id;

        return this.http
            .post('/api/project', project, this.options)
            .toPromise()
            .then(response => {
                console.log(response.json());
                this.router.navigateByUrl('/home');
                alert("You have created project successfully.");
                return response.json();
            })
            .catch(er => console.log(er._body));
    }

    getProjects(): any {
         return this.http
             .get('/api/project', this.options)
             .toPromise()
             .then(response =>{
                 console.log(response);
                 return response.json();
             })
             .catch(() => alert("An error has occurred!"));
    }

    getProject(id: number) {
        return this.http
            .get('/api/project' + id, this.options)
            .toPromise()
            .then(response =>{
                this.router.navigateByUrl('/home');
                alert("You have created project successfully.");
                return response.json().data 
            })
            .catch(er => alert(JSON.parse(er._body).error));
    }
}