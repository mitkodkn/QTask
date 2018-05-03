import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { User } from './../models/user';

@Injectable()
export class AuthenticationService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http, private router: Router) {
    }

    login(username: string, password: string): any {
        var user = { Email: username, Password: password };

        this.http.post("/auth/login", user, this.options)
            .toPromise()
            .then((response: Response) => {
                localStorage.setItem('currentUser', JSON.stringify(response.json()));
                this.router.navigateByUrl('/home');
            })
            .catch(() => {
                alert("Incorrect data!");
            })

        // return this.http
        //     .post('/api/authenticate', JSON.stringify(user), this.options)
        //     .toPromise()
        //     .then((response: Response) => {
        //         let token = response.json().id_token;
        //         let role = response.json().role;
        //         let groupName = response.json().group;
        //         token = "asdfdf";
        //         if (token) {
        //             localStorage.setItem('currentUser', JSON.stringify({ username }));
        //             localStorage.setItem('token', JSON.stringify({ token }));
        //             localStorage.setItem('role', role);

        //             alert("You have logged in successfully");
        //             this.router.navigateByUrl('/home');

        //             return true;
        //         } 
        //         else {
        //             alert("Wrong password or username. Please try again");
        //             return false;
        //         }
        //     });
    }

    register(user: User): any{
        return this.http
          .post('/api/account', JSON.stringify(user), this.options)
          .toPromise()
          .then(response =>{
            this.router.navigateByUrl('/login');
            alert("You have registered successfully");
            response.json().data 
          })
          .catch(er => alert(JSON.parse(er._body).error));
      }

    logout(): void {
        alert("You have successfully logged out");
        localStorage.clear();
    }

    isLoggedIn(): boolean {
        if(localStorage.length > 0) {
            return true;
        }
        else{
            return false;
        }
    }
}
