import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Project } from './../models/project';

@Injectable()
export class ProjectService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

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
}