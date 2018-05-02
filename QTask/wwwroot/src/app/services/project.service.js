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
var project_1 = require("./../models/project");
var ProjectService = /** @class */ (function () {
    function ProjectService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.projects = [
            new project_1.Project("NEznam1"),
            new project_1.Project("NEznam2"),
            new project_1.Project("NEznam3"),
            new project_1.Project("NEznam4"),
            new project_1.Project("NEznam5"),
            new project_1.Project("NEznam6"),
            new project_1.Project("NEznam7"),
            new project_1.Project("NEznam8"),
        ];
    }
    ProjectService.prototype.createProject = function (project) {
        return this.http
            .post('/api/projects', JSON.stringify(project), this.options)
            .toPromise()
            .then(function (response) {
            //  this.router.navigateByUrl('/jobs');
            alert("You have created project successfully.");
            response.json().data;
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    ProjectService.prototype.getProjects = function () {
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
    };
    ProjectService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
    ], ProjectService);
    return ProjectService;
    var _a, _b;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map