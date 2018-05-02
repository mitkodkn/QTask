"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    AuthenticationService.prototype.login = function (username, password) {
        var user = { username: username, password: password };
        localStorage.setItem('currentUser', JSON.stringify({ username: username }));
        alert("You have logged in successfully");
        this.router.navigateByUrl('/home');
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
    };
    AuthenticationService.prototype.logout = function () {
        alert("You have successfully logged out");
        localStorage.clear();
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (localStorage.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=auth.service.js.map