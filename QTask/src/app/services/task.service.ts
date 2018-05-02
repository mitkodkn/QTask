import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Task } from './../models/task';

@Injectable()
export class TaskService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http, private router: Router) {
    }

    getTask(id: number) {
        return this.http
            .get('/api/task/' + id, this.options)
            .toPromise()
            .then(response =>{
                this.router.navigateByUrl('/home');
                alert("You have created task successfully.");
                return response.json().data;
            })
            .catch(er => alert(JSON.parse(er._body).error));
    }

    createTask(task: Task) {
        return this.http
            .post('/api/task', JSON.stringify(task), this.options)
            .toPromise()
            .then(response =>{
                this.router.navigateByUrl('/home');
                alert("You have created task successfully.");
                response.json().data 
            })
            .catch(er => alert(JSON.parse(er._body).error));
    }
    
    updateTask(task: Task) {
        return this.http
            .put('/api/task', JSON.stringify(task), this.options)
            .toPromise()
            .then(response =>{
                this.router.navigateByUrl('/home');
                alert("You have created task successfully.");
                response.json().data 
            })
            .catch(er => alert(JSON.parse(er._body).error));
    }
}
