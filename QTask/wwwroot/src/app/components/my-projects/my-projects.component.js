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
var project_service_1 = require("./../../services/project.service");
var MyProjectsComponent = /** @class */ (function () {
    function MyProjectsComponent(projectService) {
        this.projectService = projectService;
    }
    MyProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    MyProjectsComponent.prototype.getProjects = function () {
        this.projects = this.projectService.getProjects();
    };
    MyProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-my-projects',
            templateUrl: './my-projects.component.html',
            styleUrls: ['./my-projects.component.css']
        }),
        __metadata("design:paramtypes", [project_service_1.ProjectService])
    ], MyProjectsComponent);
    return MyProjectsComponent;
}());
exports.MyProjectsComponent = MyProjectsComponent;
//# sourceMappingURL=my-projects.component.js.map