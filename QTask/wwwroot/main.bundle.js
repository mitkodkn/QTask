webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/components/home/home.component.ts");
var login_component_1 = __webpack_require__("./src/app/components/login/login.component.ts");
var create_project_component_1 = __webpack_require__("./src/app/components/create-project/create-project.component.ts");
var my_projects_component_1 = __webpack_require__("./src/app/components/my-projects/my-projects.component.ts");
var project_details_component_1 = __webpack_require__("./src/app/components/project-details/project-details.component.ts");
var register_component_1 = __webpack_require__("./src/app/components/register/register.component.ts");
var create_task_component_1 = __webpack_require__("./src/app/components/create-task/create-task.component.ts");
var edit_task_component_1 = __webpack_require__("./src/app/components/edit-task/edit-task.component.ts");
var my_pending_tasks_component_1 = __webpack_require__("./src/app/components/my-pending-tasks/my-pending-tasks.component.ts");
var routes = [
    {
        "path": '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        "path": 'home',
        component: home_component_1.HomeComponent,
    },
    {
        "path": 'login',
        component: login_component_1.LoginComponent
    },
    {
        "path": 'create-project',
        component: create_project_component_1.CreateProjectComponent
    },
    {
        "path": 'my-project',
        component: my_projects_component_1.MyProjectsComponent
    },
    {
        "path": 'project-details',
        component: project_details_component_1.ProjectDetailsComponent
    },
    {
        "path": 'register',
        component: register_component_1.RegisterComponent
    },
    {
        "path": 'create-task',
        component: create_task_component_1.CreateTaskComponent
    },
    {
        "path": 'edit-task',
        component: edit_task_component_1.EditTaskComponent
    },
    {
        "path": 'my-pending-tasks',
        component: my_pending_tasks_component_1.MyPendingTasksComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routedComponents = [home_component_1.HomeComponent, login_component_1.LoginComponent, create_project_component_1.CreateProjectComponent];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color: #fbf5f5;\r\n}\r\n\r\n.pagination > li > a {\r\n    position: relative;\r\n    float: left;\r\n    padding: 6px 12px;\r\n    margin-left: -1px;\r\n    line-height: 1.42857143;\r\n    color: #1b1c1d;\r\n    text-decoration: none;\r\n    background-color: #d0d0d0;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.pagination > li > span {\r\n    position: relative;\r\n    float: left;\r\n    padding: 6px 12px;\r\n    margin-left: -1px;\r\n    line-height: 1.42857143;\r\n    color: #1b1c1d;\r\n    text-decoration: none;\r\n    background-color: #d0d0d0;\r\n    border: 1px solid #ddd;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var navigation_component_1 = __webpack_require__("./src/app/components/navigation/navigation.component.ts");
var create_project_component_1 = __webpack_require__("./src/app/components/create-project/create-project.component.ts");
var home_component_1 = __webpack_require__("./src/app/components/home/home.component.ts");
var login_component_1 = __webpack_require__("./src/app/components/login/login.component.ts");
var my_projects_component_1 = __webpack_require__("./src/app/components/my-projects/my-projects.component.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var project_service_1 = __webpack_require__("./src/app/services/project.service.ts");
var create_task_component_1 = __webpack_require__("./src/app/components/create-task/create-task.component.ts");
var project_details_component_1 = __webpack_require__("./src/app/components/project-details/project-details.component.ts");
var register_component_1 = __webpack_require__("./src/app/components/register/register.component.ts");
var edit_task_component_1 = __webpack_require__("./src/app/components/edit-task/edit-task.component.ts");
var my_pending_tasks_component_1 = __webpack_require__("./src/app/components/my-pending-tasks/my-pending-tasks.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navigation_component_1.NavigationComponent,
                create_project_component_1.CreateProjectComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                my_projects_component_1.MyProjectsComponent,
                create_task_component_1.CreateTaskComponent,
                project_details_component_1.ProjectDetailsComponent,
                register_component_1.RegisterComponent,
                edit_task_component_1.EditTaskComponent,
                my_pending_tasks_component_1.MyPendingTasksComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [auth_service_1.AuthenticationService, project_service_1.ProjectService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/create-project/create-project.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    margin-top: 30px;\r\n}\r\n\r\ninput,\r\nselect {\r\n    width: 85%;\r\n}\r\n\r\nform {\r\n    margin-bottom: 135px;\r\n    margin-top: 5%;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\ntextarea {\r\n    max-width: 800px\r\n}"

/***/ }),

/***/ "./src/app/components/create-project/create-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>CREATE NEW PROJECT</h2>\r\n    <hr>\r\n    <form class=\"form-horizontal\" #addProjectForm=\"ngForm\" (ngSubmit)=\"createProject();\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\"></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"project.name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n                <label class=\"control-label col-sm-2\"></label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Description\" name=\"description\" [(ngModel)]=\"project.description\">\r\n                </div>\r\n            </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">CREATE PROJECT</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ "./src/app/components/create-project/create-project.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var project_service_1 = __webpack_require__("./src/app/services/project.service.ts");
var project_1 = __webpack_require__("./src/app/models/project.ts");
var CreateProjectComponent = /** @class */ (function () {
    function CreateProjectComponent(projectService) {
        this.projectService = projectService;
    }
    CreateProjectComponent.prototype.ngOnInit = function () {
        this.project = new project_1.Project('', '');
    };
    CreateProjectComponent.prototype.createProject = function () {
        this.projectService.createProject(this.project);
    };
    CreateProjectComponent = __decorate([
        core_1.Component({
            selector: 'app-create-project',
            template: __webpack_require__("./src/app/components/create-project/create-project.component.html"),
            styles: [__webpack_require__("./src/app/components/create-project/create-project.component.css")]
        }),
        __metadata("design:paramtypes", [project_service_1.ProjectService])
    ], CreateProjectComponent);
    return CreateProjectComponent;
}());
exports.CreateProjectComponent = CreateProjectComponent;


/***/ }),

/***/ "./src/app/components/create-task/create-task.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    margin-top: 30px;\r\n}\r\n\r\ninput {\r\n    width: 85%;\r\n}\r\n\r\nform {\r\n    margin-top: 5%;\r\n    margin-bottom: 282px;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}"

/***/ }),

/***/ "./src/app/components/create-task/create-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>CREATE TASK</h2>\r\n    <hr>\r\n    <form class=\"form-horizontal\" #loginForm=\"ngForm\" (ngSubmit)=\"login();\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"title\">Title:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Title\" name=\"title\" [(ngModel)]=\"model.title\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"description\">Description:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"Description\" name=\"description\" [(ngModel)]=\"model.passwordHash\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"description\">Description:</label>\r\n            <div class=\"col-sm-10\">\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"new\" name=\"state\" [(ngModel)]=\"model.role\"> <span> NEW</span>\r\n                </label>\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"in progress\" name=\"state\" [(ngModel)]=\"model.role\"> <span> IN PROGRESS</span>\r\n                </label>\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"completed\" name=\"state\" [(ngModel)]=\"model.role\"> <span> COMPLETED</span>\r\n                </label>\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"removed\" name=\"state\" [(ngModel)]=\"model.role\"> <span> REMOVED</span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"executor\">Executor:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" id=\"executor\" placeholder=\"Executor\" name=\"executor\" [(ngModel)]=\"model.passwordHash\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">CREATE TASK</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/components/create-task/create-task.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var task_1 = __webpack_require__("./src/app/models/task.ts");
var user_1 = __webpack_require__("./src/app/models/user.ts");
var task_service_1 = __webpack_require__("./src/app/services/task.service.ts");
var CreateTaskComponent = /** @class */ (function () {
    function CreateTaskComponent(taskService) {
        this.taskService = taskService;
        this.task = new task_1.Task('', '', '', new user_1.User('', '', '', '', ''), new user_1.User('', '', '', '', ''));
    }
    CreateTaskComponent.prototype.ngOnInit = function () {
    };
    CreateTaskComponent.prototype.createProject = function () {
        this.taskService.createTask(this.task);
    };
    CreateTaskComponent = __decorate([
        core_1.Component({
            selector: 'app-create-task',
            template: __webpack_require__("./src/app/components/create-task/create-task.component.html"),
            styles: [__webpack_require__("./src/app/components/create-task/create-task.component.css")]
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService])
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());
exports.CreateTaskComponent = CreateTaskComponent;


/***/ }),

/***/ "./src/app/components/edit-task/edit-task.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-task/edit-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>EDIT TASK</h2>\r\n    <hr>\r\n    <form class=\"form-horizontal\" #loginForm=\"ngForm\" (ngSubmit)=\"login();\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"title\">Title:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Title\" name=\"title\" [(ngModel)]=\"model.title\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"description\">Description:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"Description\" name=\"description\" [(ngModel)]=\"model.passwordHash\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"description\">Description:</label>\r\n            <div class=\"col-sm-10\">\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"new\" name=\"state\" [(ngModel)]=\"model.role\"> <span> NEW</span>\r\n                </label>\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"in progress\" name=\"state\" [(ngModel)]=\"model.role\"> <span> IN PROGRESS</span>\r\n                </label>\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"completed\" name=\"state\" [(ngModel)]=\"model.role\"> <span> COMPLETED</span>\r\n                </label>\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"removed\" name=\"state\" [(ngModel)]=\"model.role\"> <span> REMOVED</span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"executor\">Executor:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" id=\"executor\" placeholder=\"Executor\" name=\"executor\" [(ngModel)]=\"model.passwordHash\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">SAVE TASK</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/components/edit-task/edit-task.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var task_service_1 = __webpack_require__("./src/app/services/task.service.ts");
var EditTaskComponent = /** @class */ (function () {
    function EditTaskComponent(taskService) {
        this.taskService = taskService;
    }
    EditTaskComponent.prototype.ngOnInit = function () {
        var result = this.getTask(1);
    };
    EditTaskComponent.prototype.getTask = function (id) {
        return this.taskService.getTask(id);
    };
    EditTaskComponent.prototype.updateTask = function () {
        this.taskService.updateTask(this.task);
    };
    EditTaskComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-task',
            template: __webpack_require__("./src/app/components/edit-task/edit-task.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-task/edit-task.component.css")]
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService])
    ], EditTaskComponent);
    return EditTaskComponent;
}());
exports.EditTaskComponent = EditTaskComponent;


/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    overflow-x: hidden;\r\n    font-family: 'Roboto Slab', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  p {\r\n    line-height: 1.75;\r\n  }\r\n  \r\n  a {\r\n    color: #fed136;\r\n  }\r\n  \r\n  a:hover {\r\n    color: #fec503;\r\n  }\r\n  \r\n  .text-primary {\r\n    color: #fed136 !important;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    font-weight: 700;\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  section {\r\n    padding: 100px 0;\r\n  }\r\n  \r\n  section h2.section-heading {\r\n    font-size: 40px;\r\n    margin-top: 0;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  section h3.section-subheading {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    font-style: italic;\r\n    margin-bottom: 75px;\r\n    text-transform: none;\r\n    font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    section {\r\n      padding: 150px 0;\r\n    }\r\n  }\r\n  \r\n  .btn {\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    font-weight: 700;\r\n  }\r\n  \r\n  .btn-xl {\r\n    font-size: 18px;\r\n    padding: 20px 40px;\r\n  }\r\n  \r\n  .btn-primary {\r\n      color: white;\r\n    background-color: #fed136;\r\n    border-color: #fed136;\r\n  }\r\n  \r\n  .btn-primary:active, .btn-primary:focus, .btn-primary:hover {\r\n    background-color: #fec810 !important;\r\n    border-color: #fec810 !important;\r\n    color: white;\r\n  }\r\n  \r\n  .btn-primary:active, .btn-primary:focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(254, 209, 55, 0.5) !important;\r\n            box-shadow: 0 0 0 0.2rem rgba(254, 209, 55, 0.5) !important;\r\n  }\r\n  \r\n  ::-moz-selection {\r\n    background: #fed136;\r\n    text-shadow: none;\r\n  }\r\n  \r\n  ::selection {\r\n    background: #fed136;\r\n    text-shadow: none;\r\n  }\r\n  \r\n  img::-moz-selection {\r\n    background: transparent;\r\n  }\r\n  \r\n  img::selection {\r\n    background: transparent;\r\n  }\r\n  \r\n  img::-moz-selection {\r\n    background: transparent;\r\n  }\r\n  \r\n  #mainNav {\r\n    background-color: #212529;\r\n  }\r\n  \r\n  #mainNav .navbar-toggler {\r\n    font-size: 12px;\r\n    right: 0;\r\n    padding: 13px;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    border: 0;\r\n    background-color: #fed136;\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  #mainNav .navbar-brand {\r\n    color: #fed136;\r\n    font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive;\r\n  }\r\n  \r\n  #mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\r\n    color: #fec503;\r\n  }\r\n  \r\n  #mainNav .navbar-nav .nav-item .nav-link {\r\n    font-size: 90%;\r\n    font-weight: 400;\r\n    padding: 0.75em 0;\r\n    letter-spacing: 1px;\r\n    color: white;\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  #mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {\r\n    color: #fed136;\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    #mainNav {\r\n      padding-top: 25px;\r\n      padding-bottom: 25px;\r\n      -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;\r\n      transition: padding-top 0.3s, padding-bottom 0.3s;\r\n      border: none;\r\n      background-color: transparent;\r\n    }\r\n    #mainNav .navbar-brand {\r\n      font-size: 1.75em;\r\n      -webkit-transition: all 0.3s;\r\n      transition: all 0.3s;\r\n    }\r\n    #mainNav .navbar-nav .nav-item .nav-link {\r\n      padding: 1.1em 1em !important;\r\n    }\r\n    #mainNav.navbar-shrink {\r\n      padding-top: 0;\r\n      padding-bottom: 0;\r\n      background-color: #212529;\r\n    }\r\n    #mainNav.navbar-shrink .navbar-brand {\r\n      font-size: 1.25em;\r\n      padding: 12px 0;\r\n    }\r\n  }\r\n  \r\n  header.masthead {\r\n    text-align: center;\r\n    color: white;\r\n    background-image: url('header-bg.e2d2a51c2932205b52f4.jpg');\r\n    background-repeat: no-repeat;\r\n    background-attachment: scroll;\r\n    background-position: center center;\r\n    background-size: cover;\r\n  }\r\n  \r\n  header.masthead .intro-text {\r\n    padding-top: 150px;\r\n    padding-bottom: 100px;\r\n  }\r\n  \r\n  header.masthead .intro-text .intro-lead-in {\r\n    font-size: 22px;\r\n    font-style: italic;\r\n    line-height: 22px;\r\n    margin-bottom: 25px;\r\n    font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  header.masthead .intro-text .intro-heading {\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    line-height: 50px;\r\n    margin-bottom: 25px;\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    header.masthead .intro-text {\r\n      padding-top: 300px;\r\n      padding-bottom: 200px;\r\n    }\r\n    header.masthead .intro-text .intro-lead-in {\r\n      font-size: 40px;\r\n      font-style: italic;\r\n      line-height: 40px;\r\n      margin-bottom: 25px;\r\n      font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    }\r\n    header.masthead .intro-text .intro-heading {\r\n      font-size: 75px;\r\n      font-weight: 700;\r\n      line-height: 75px;\r\n      margin-bottom: 50px;\r\n      font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    }\r\n  }\r\n  \r\n  .service-heading {\r\n    margin: 15px 0;\r\n    text-transform: none;\r\n  }\r\n  \r\n  #portfolio .portfolio-item {\r\n    right: 0;\r\n    margin: 0 0 15px;\r\n  }\r\n  \r\n  #portfolio .portfolio-item .portfolio-link {\r\n    position: relative;\r\n    display: block;\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  #portfolio .portfolio-item .portfolio-link .portfolio-hover {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-transition: all ease 0.5s;\r\n    transition: all ease 0.5s;\r\n    opacity: 0;\r\n    background: rgba(254, 209, 54, 0.9);\r\n  }\r\n  \r\n  #portfolio .portfolio-item .portfolio-link .portfolio-hover:hover {\r\n    opacity: 1;\r\n  }\r\n  \r\n  #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content {\r\n    font-size: 20px;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: 100%;\r\n    height: 20px;\r\n    margin-top: -12px;\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n  \r\n  #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content i {\r\n    margin-top: -12px;\r\n  }\r\n  \r\n  #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h3,\r\n  #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h4 {\r\n    margin: 0;\r\n  }\r\n  \r\n  #portfolio .portfolio-item .portfolio-caption {\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    padding: 25px;\r\n    text-align: center;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  #portfolio .portfolio-item .portfolio-caption h4 {\r\n    margin: 0;\r\n    text-transform: none;\r\n  }\r\n  \r\n  #portfolio .portfolio-item .portfolio-caption p {\r\n    font-size: 16px;\r\n    font-style: italic;\r\n    margin: 0;\r\n    font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  #portfolio * {\r\n    z-index: 2;\r\n  }\r\n  \r\n  @media (min-width: 767px) {\r\n    #portfolio .portfolio-item {\r\n      margin: 0 0 30px;\r\n    }\r\n  }\r\n  \r\n  .portfolio-modal {\r\n    padding-right: 0px !important;\r\n  }\r\n  \r\n  .portfolio-modal .modal-dialog {\r\n    margin: 1rem;\r\n    max-width: 100vw;\r\n  }\r\n  \r\n  .portfolio-modal .modal-content {\r\n    padding: 100px 0;\r\n    text-align: center;\r\n  }\r\n  \r\n  .portfolio-modal .modal-content h2 {\r\n    font-size: 3em;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .portfolio-modal .modal-content p {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .portfolio-modal .modal-content p.item-intro {\r\n    font-size: 16px;\r\n    font-style: italic;\r\n    margin: 20px 0 30px;\r\n    font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  .portfolio-modal .modal-content ul.list-inline {\r\n    margin-top: 0;\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .portfolio-modal .modal-content img {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .portfolio-modal .modal-content button {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .portfolio-modal .close-modal {\r\n    position: absolute;\r\n    top: 25px;\r\n    right: 25px;\r\n    width: 75px;\r\n    height: 75px;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .portfolio-modal .close-modal:hover {\r\n    opacity: 0.3;\r\n  }\r\n  \r\n  .portfolio-modal .close-modal .lr {\r\n    /* Safari and Chrome */\r\n    z-index: 1051;\r\n    width: 1px;\r\n    height: 75px;\r\n    margin-left: 35px;\r\n    /* IE 9 */\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    background-color: #212529;\r\n  }\r\n  \r\n  .portfolio-modal .close-modal .lr .rl {\r\n    /* Safari and Chrome */\r\n    z-index: 1052;\r\n    width: 1px;\r\n    height: 75px;\r\n    /* IE 9 */\r\n    -webkit-transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n    background-color: #212529;\r\n  }\r\n  \r\n  .timeline {\r\n    position: relative;\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .timeline:before {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 40px;\r\n    width: 2px;\r\n    margin-left: -1.5px;\r\n    content: '';\r\n    background-color: #e9ecef;\r\n  }\r\n  \r\n  .timeline > li {\r\n    position: relative;\r\n    min-height: 50px;\r\n    margin-bottom: 50px;\r\n  }\r\n  \r\n  .timeline > li:after, .timeline > li:before {\r\n    display: table;\r\n    content: ' ';\r\n  }\r\n  \r\n  .timeline > li:after {\r\n    clear: both;\r\n  }\r\n  \r\n  .timeline > li .timeline-panel {\r\n    position: relative;\r\n    float: right;\r\n    width: 100%;\r\n    padding: 0 20px 0 100px;\r\n    text-align: left;\r\n  }\r\n  \r\n  .timeline > li .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  \r\n  .timeline > li .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n  \r\n  .timeline > li .timeline-image {\r\n    position: absolute;\r\n    z-index: 100;\r\n    left: 0;\r\n    width: 80px;\r\n    height: 80px;\r\n    margin-left: 0;\r\n    text-align: center;\r\n    color: white;\r\n    border: 7px solid #e9ecef;\r\n    border-radius: 100%;\r\n    background-color: #fed136;\r\n  }\r\n  \r\n  .timeline > li .timeline-image h4 {\r\n    font-size: 10px;\r\n    line-height: 14px;\r\n    margin-top: 12px;\r\n  }\r\n  \r\n  .timeline > li.timeline-inverted > .timeline-panel {\r\n    float: right;\r\n    padding: 0 20px 0 100px;\r\n    text-align: left;\r\n  }\r\n  \r\n  .timeline > li.timeline-inverted > .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  \r\n  .timeline > li.timeline-inverted > .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n  \r\n  .timeline > li:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .timeline .timeline-heading h4 {\r\n    margin-top: 0;\r\n    color: inherit;\r\n  }\r\n  \r\n  .timeline .timeline-heading h4.subheading {\r\n    text-transform: none;\r\n  }\r\n  \r\n  .timeline .timeline-body > ul,\r\n  .timeline .timeline-body > p {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .timeline:before {\r\n      left: 50%;\r\n    }\r\n    .timeline > li {\r\n      min-height: 100px;\r\n      margin-bottom: 100px;\r\n    }\r\n    .timeline > li .timeline-panel {\r\n      float: left;\r\n      width: 41%;\r\n      padding: 0 20px 20px 30px;\r\n      text-align: right;\r\n    }\r\n    .timeline > li .timeline-image {\r\n      left: 50%;\r\n      width: 100px;\r\n      height: 100px;\r\n      margin-left: -50px;\r\n    }\r\n    .timeline > li .timeline-image h4 {\r\n      font-size: 13px;\r\n      line-height: 18px;\r\n      margin-top: 16px;\r\n    }\r\n    .timeline > li.timeline-inverted > .timeline-panel {\r\n      float: right;\r\n      padding: 0 30px 20px 20px;\r\n      text-align: left;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .timeline > li {\r\n      min-height: 150px;\r\n    }\r\n    .timeline > li .timeline-panel {\r\n      padding: 0 20px 20px;\r\n    }\r\n    .timeline > li .timeline-image {\r\n      width: 150px;\r\n      height: 150px;\r\n      margin-left: -75px;\r\n    }\r\n    .timeline > li .timeline-image h4 {\r\n      font-size: 18px;\r\n      line-height: 26px;\r\n      margin-top: 30px;\r\n    }\r\n    .timeline > li.timeline-inverted > .timeline-panel {\r\n      padding: 0 20px 20px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .timeline > li {\r\n      min-height: 170px;\r\n    }\r\n    .timeline > li .timeline-panel {\r\n      padding: 0 20px 20px 100px;\r\n    }\r\n    .timeline > li .timeline-image {\r\n      width: 170px;\r\n      height: 170px;\r\n      margin-left: -85px;\r\n    }\r\n    .timeline > li .timeline-image h4 {\r\n      margin-top: 40px;\r\n    }\r\n    .timeline > li.timeline-inverted > .timeline-panel {\r\n      padding: 0 100px 20px 20px;\r\n    }\r\n  }\r\n  \r\n  .team-member {\r\n    margin-bottom: 50px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .team-member img {\r\n    width: 225px;\r\n    height: 225px;\r\n    border: 7px solid #fff;\r\n  }\r\n  \r\n  .team-member h4 {\r\n    margin-top: 25px;\r\n    margin-bottom: 0;\r\n    text-transform: none;\r\n  }\r\n  \r\n  .team-member p {\r\n    margin-top: 0;\r\n  }\r\n  \r\n  section#contact {\r\n    background-color: #212529;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n  }\r\n  \r\n  section#contact .section-heading {\r\n    color: #fff;\r\n  }\r\n  \r\n  section#contact .form-group {\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  section#contact .form-group input,\r\n  section#contact .form-group textarea {\r\n    padding: 20px;\r\n  }\r\n  \r\n  section#contact .form-group input.form-control {\r\n    height: auto;\r\n  }\r\n  \r\n  section#contact .form-group textarea.form-control {\r\n    height: 248px;\r\n  }\r\n  \r\n  section#contact .form-control:focus {\r\n    border-color: #fed136;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n  }\r\n  \r\n  section#contact ::-webkit-input-placeholder {\r\n    font-weight: 700;\r\n    color: #ced4da;\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  section#contact :-moz-placeholder {\r\n    font-weight: 700;\r\n    color: #ced4da;\r\n    /* Firefox 18- */\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  section#contact ::-moz-placeholder {\r\n    font-weight: 700;\r\n    color: #ced4da;\r\n    /* Firefox 19+ */\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  section#contact :-ms-input-placeholder {\r\n    font-weight: 700;\r\n    color: #ced4da;\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  footer {\r\n    padding: 25px 0;\r\n    text-align: center;\r\n  }\r\n  \r\n  footer span.copyright {\r\n    font-size: 90%;\r\n    line-height: 40px;\r\n    text-transform: none;\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  footer ul.quicklinks {\r\n    font-size: 90%;\r\n    line-height: 40px;\r\n    margin-bottom: 0;\r\n    text-transform: none;\r\n    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  ul.social-buttons {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  ul.social-buttons li a {\r\n    font-size: 20px;\r\n    line-height: 40px;\r\n    display: block;\r\n    width: 40px;\r\n    height: 40px;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    color: white;\r\n    border-radius: 100%;\r\n    outline: none;\r\n    background-color: #212529;\r\n  }\r\n  \r\n  ul.social-buttons li a:active, ul.social-buttons li a:focus, ul.social-buttons li a:hover {\r\n    background-color: #fed136;\r\n  }"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead\">\r\n  <div class=\"container\">\r\n    <div class=\"intro-text\">\r\n      <div class=\"intro-lead-in\">Welcome To Our task manager!</div>\r\n      <div class=\"intro-heading text-uppercase\">Start up your project now!</div>\r\n      <a class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\" routerLink=\"/login\">Sign in</a>\r\n      <a class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\" routerLink=\"/register\">Sign up</a>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    margin-top: 30px;\r\n}\r\n\r\ninput {\r\n    width: 85%;\r\n}\r\n\r\nform {\r\n    margin-top: 5%;\r\n    margin-bottom: 282px;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>LOGIN</h2>\r\n    <hr>\r\n    <form class=\"form-horizontal\" #loginForm=\"ngForm\" (ngSubmit)=\"login();\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\">User Name:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"name\" class=\"form-control\" id=\"userName\" placeholder=\"User Name\" name=\"username\" [(ngModel)]=\"model.username\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"password\" [(ngModel)]=\"model.passwordHash\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var user_1 = __webpack_require__("./src/app/models/user.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = new user_1.User('', '', '', '', '');
    };
    LoginComponent.prototype.login = function () {
        this.authenticationService.login(this.model.username, this.model.passwordHash);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/components/my-pending-tasks/my-pending-tasks.component.css":
/***/ (function(module, exports) {

module.exports = "/*    --------------------------------------------------\r\n\t:: General\r\n\t-------------------------------------------------- */\r\n    body {\r\n        font-family: 'Open Sans', sans-serif;\r\n        color: #353535;\r\n    }\r\n    .content h1 {\r\n        text-align: center;\r\n    }\r\n    .content .content-footer p {\r\n        color: #6d6d6d;\r\n        font-size: 12px;\r\n        text-align: center;\r\n    }\r\n    .content .content-footer p a {\r\n        color: inherit;\r\n        font-weight: bold;\r\n    }\r\n    /*\t--------------------------------------------------\r\n        :: Table Filter\r\n        -------------------------------------------------- */\r\n    .panel {\r\n        border: 1px solid #ddd;\r\n        background-color: #fcfcfc;\r\n    }\r\n    .panel .btn-group {\r\n        margin: 15px 0 30px;\r\n    }\r\n    .panel .btn-group .btn {\r\n        -webkit-transition: background-color .3s ease;\r\n        transition: background-color .3s ease;\r\n    }\r\n    .table-filter {\r\n        background-color: #fff;\r\n        border-bottom: 1px solid #eee;\r\n    }\r\n    .table-filter tbody tr:hover {\r\n        cursor: pointer;\r\n        background-color: #eee;\r\n    }\r\n    .table-filter tbody tr td {\r\n        padding: 10px;\r\n        vertical-align: middle;\r\n        border-top-color: #eee;\r\n    }\r\n    .table-filter tbody tr.selected td {\r\n        background-color: #eee;\r\n    }\r\n    .table-filter tr td:first-child {\r\n        width: 38px;\r\n    }\r\n    .table-filter tr td:nth-child(2) {\r\n        width: 35px;\r\n    }\r\n    .ckbox {\r\n        position: relative;\r\n    }\r\n    .ckbox input[type=\"checkbox\"] {\r\n        opacity: 0;\r\n    }\r\n    .ckbox label {\r\n        -webkit-user-select: none;\r\n        -moz-user-select: none;\r\n        -ms-user-select: none;\r\n        user-select: none;\r\n    }\r\n    .ckbox label:before {\r\n        content: '';\r\n        top: 1px;\r\n        left: 0;\r\n        width: 18px;\r\n        height: 18px;\r\n        display: block;\r\n        position: absolute;\r\n        border-radius: 2px;\r\n        border: 1px solid #bbb;\r\n        background-color: #fff;\r\n    }\r\n    .ckbox input[type=\"checkbox\"]:checked + label:before {\r\n        border-color: #2BBCDE;\r\n        background-color: #2BBCDE;\r\n    }\r\n    .ckbox input[type=\"checkbox\"]:checked + label:after {\r\n        top: 3px;\r\n        left: 3.5px;\r\n        content: '\\e013';\r\n        color: #fff;\r\n        font-size: 11px;\r\n        font-family: 'Glyphicons Halflings';\r\n        position: absolute;\r\n    }\r\n    .table-filter .star {\r\n        color: #ccc;\r\n        text-align: center;\r\n        display: block;\r\n    }\r\n    .table-filter .star.star-checked {\r\n        color: #F0AD4E;\r\n    }\r\n    .table-filter .star:hover {\r\n        color: #ccc;\r\n    }\r\n    .table-filter .star.star-checked:hover {\r\n        color: #F0AD4E;\r\n    }\r\n    .table-filter .media-photo {\r\n        width: 35px;\r\n    }\r\n    .table-filter .media-body {\r\n        display: block;\r\n        /* Had to use this style to force the div to expand (wasn't necessary with my bootstrap version 3.3.6) */\r\n    }\r\n    .table-filter .media-meta {\r\n        font-size: 11px;\r\n        color: #999;\r\n    }\r\n    .table-filter .media .title {\r\n        color: #2BBCDE;\r\n        font-size: 14px;\r\n        font-weight: bold;\r\n        line-height: normal;\r\n        margin: 0;\r\n    }\r\n    .table-filter .media .title span {\r\n        font-size: .8em;\r\n        margin-right: 20px;\r\n    }\r\n    .table-filter .media .title span.pagado {\r\n        color: #5cb85c;\r\n    }\r\n    .table-filter .media .title span.pendiente {\r\n        color: #f0ad4e;\r\n    }\r\n    .table-filter .media .title span.cancelado {\r\n        color: #d9534f;\r\n    }\r\n    .table-filter .media .summary {\r\n        font-size: 14px;\r\n    }\r\n    .container {\r\n        margin-top: 50px\r\n    }"

/***/ }),

/***/ "./src/app/components/my-pending-tasks/my-pending-tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<section class=\"content\">\r\n\t\t\t<h1>My Tasks</h1>\r\n\t\t\t<div class=\"col-md-8 col-md-offset-2\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-filter\" data-target=\"pagado\">Completed</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-filter\" data-target=\"pendiente\">In Progress</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-filter\" data-target=\"cancelado\">Removed</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-filter\" data-target=\"all\">New</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"table-container\">\r\n\t\t\t\t\t\t\t<table class=\"table table-filter\">\r\n\t\t\t\t\t\t\t\t<tbody>\r\n                  <!--for loop -->\r\n\t\t\t\t\t\t\t\t\t<tr data-status=\"pagado\">\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"pull-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"media-meta pull-right\">Febrero 13, 2016</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem Impsum\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right pagado\">(Pagado)</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"summary\">Ut enim ad minim veniam, quis nostrud exercitation...</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/my-pending-tasks/my-pending-tasks.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MyPendingTasksComponent = /** @class */ (function () {
    function MyPendingTasksComponent() {
    }
    MyPendingTasksComponent.prototype.ngOnInit = function () {
    };
    MyPendingTasksComponent = __decorate([
        core_1.Component({
            selector: 'app-my-pending-tasks',
            template: __webpack_require__("./src/app/components/my-pending-tasks/my-pending-tasks.component.html"),
            styles: [__webpack_require__("./src/app/components/my-pending-tasks/my-pending-tasks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyPendingTasksComponent);
    return MyPendingTasksComponent;
}());
exports.MyPendingTasksComponent = MyPendingTasksComponent;


/***/ }),

/***/ "./src/app/components/my-projects/my-projects.component.css":
/***/ (function(module, exports) {

module.exports = ".form-actions {\r\n    margin: 0;\r\n    background-color: transparent;\r\n    text-align: center;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\nimg {\r\n    max-width: 250px;\r\n    max-height: 150px;\r\n    /*\r\n    max-width: 100%;\r\n    height: auto */\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    display: block;\r\n}\r\n\r\nli {\r\n    display: inline-block;\r\n}\r\n\r\n.justify-content-center {\r\n    text-align: center;\r\n}\r\n\r\n.portfolio-item {\r\n    border: 1px solid black;\r\n}\r\n\r\n.btn-block {\r\n    background-color: #d0cfcf;\r\n    border-radius: 10px;\r\n}\r\n\r\n.btn-block:hover {\r\n    background-color: #b3b3b3;\r\n}\r\n\r\n.card-text {\r\n    border-style: outset;\r\n}\r\n\r\n.card-text:hover {\r\n    background-color: #f1f1f1;\r\n    border-style: ridge;\r\n}\r\n\r\n.project-name {\r\n    color: #3b4248;\r\n}\r\n\r\n.project-name:hover {\r\n    color: #536564;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/my-projects/my-projects.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Page Content -->\r\n    <div class=\"container\">\r\n\r\n      <!-- Page Heading -->\r\n      <h1 class=\"my-4\">My Projects</h1>\r\n      <div class=\"row\">\r\n        <div *ngFor = 'let project of projects'>\r\n          <div class=\"col-lg-3 col-md-4 col-sm-6 portfolio-item\">\r\n            <div class=\"card h-100\">\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title\">\r\n                  <a class=\"project-name\" routerLink=\"/project-details\">{{project.name}}</a>\r\n                  </h4>\r\n                  <p class=\"card-text\">{{project.description}}</p>\r\n                  <button class=\"btn-block\">Edit project</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n          \r\n    <!-- Pagination -->\r\n      <ul class=\"pagination justify-content-center\">\r\n        <li class=\"page-item\">\r\n          <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n            <span aria-hidden=\"true\">&laquo;</span>\r\n            <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"page-item\">\r\n          <a class=\"page-link\" href=\"#\">1</a>\r\n        </li>\r\n        <li class=\"page-item\">\r\n          <a class=\"page-link\" href=\"#\">2</a>\r\n        </li>\r\n        <li class=\"page-item\">\r\n          <a class=\"page-link\" href=\"#\">3</a>\r\n        </li>\r\n        <li class=\"page-item\">\r\n          <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n            <span aria-hidden=\"true\">&raquo;</span>\r\n            <span class=\"sr-only\">Next</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n      <!-- /.container -->"

/***/ }),

/***/ "./src/app/components/my-projects/my-projects.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var project_service_1 = __webpack_require__("./src/app/services/project.service.ts");
var MyProjectsComponent = /** @class */ (function () {
    function MyProjectsComponent(projectService) {
        this.projectService = projectService;
    }
    MyProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    MyProjectsComponent.prototype.getProjects = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.projectService.getProjects()];
                    case 1:
                        _a.projects = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-my-projects',
            template: __webpack_require__("./src/app/components/my-projects/my-projects.component.html"),
            styles: [__webpack_require__("./src/app/components/my-projects/my-projects.component.css")]
        }),
        __metadata("design:paramtypes", [project_service_1.ProjectService])
    ], MyProjectsComponent);
    return MyProjectsComponent;
}());
exports.MyProjectsComponent = MyProjectsComponent;


/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.logo {\r\n    height: 150%;\r\n    margin-top: -5px;\r\n}"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li><a routerLink=\"/home\"><span></span> HOME</a></li>\r\n                    <li *ngIf=\"isLoggedIn()\"><a routerLink=\"/my-project\"> MY PROJECTS</a></li>\r\n                    <li *ngIf=\"isLoggedIn()\"><a routerLink=\"/my-pending-tasks\"> MY PENDING TASKS</a></li>\r\n                </ul>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n              <li *ngIf=\"false\"><a routerLink=\"/register\"> CREATE USER ACCOUNT</a></li>\r\n              <li *ngIf=\"isLoggedIn()\"><a routerLink=\"/create-project\"> CREATE PROJECT</a></li>\r\n              <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\" routerLink=\"/home\"><span class=\"glyphicon glyphicon-log-out\"></span> LOGOUT</a></li>\r\n              <li *ngIf=\"!isLoggedIn()\"><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\" ></span> LOGIN</a></li>\r\n              <li *ngIf=\"!isLoggedIn()\"><a routerLink=\"/register\"><span class=\"glyphicon glyphicon-lock\"></span> REGISTER</a></li>\r\n          </ul>\r\n      </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authService) {
        this.authService = authService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    NavigationComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/components/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthenticationService])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;


/***/ }),

/***/ "./src/app/components/project-details/project-details.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: -15px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#members {\r\n    margin-top: -10px;\r\n}\r\n\r\n.link {\r\n    color: white;\r\n    background-color: royalblue;\r\n    padding: 10px\r\n}\r\n\r\n.important {\r\n    border-radius: unset;\r\n}\r\n\r\n.important-box {\r\n    border: 2px solid darkslategrey;\r\n    padding: 10px\r\n}\r\n\r\n.right {\r\n    float: right;\r\n    margin-top: 20px\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\nimg {\r\n    max-width: 200px;\r\n    height: auto\r\n}\r\n\r\n.submit {\r\n    margin-left: -58px;\r\n    margin-top: 5px;\r\n}\r\n\r\n#childName {\r\n    margin-left: -15px;\r\n}\r\n\r\n#Avatar {\r\n    margin-left: -15px;\r\n}\r\n\r\n#description {\r\n    font-size: 16px;\r\n}\r\n\r\n.checkbox img {\r\n    float: right;\r\n    display: inline-block;\r\n    width: 25px;\r\n}"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h2 class=\"page-header\">Project</h2>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"members\" class=\"row\">\r\n        \r\n        <div class=\"col-lg-4 col-sm-6 text-center\">\r\n            <h3><strong>Project NAME</strong></h3>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-left\">\r\n            <h4 class=\"link\"><strong>DESCRIPTION</strong></h4>\r\n            <p id=\"description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-left\">\r\n            <h4 class=\"link\"><strong>TASKS</strong></h4>\r\n            <div class=\"important-box\">\r\n                <div class=\"checkbox\">\r\n                    <span>To study all new lessonsasdfasdfasdfasdfasdf for school</span>\r\n                    <img class=\"img-responsive\" id=\"delete-icon\" src=\"https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-512.png\">\r\n                    <a routerLink=\"/edit-task\"><img class=\"img-responsive\" id=\"edit-icon\" src=\"https://cdn3.iconfinder.com/data/icons/block/32/box_edit-512.png\"></a>\r\n                </div>\r\n            </div>\r\n            <p><a class=\"btn btn-lg btn-success right\" routerLink=\"/create-task\" role=\"button\">ADD NEW TASK</a></p>\r\n        </div>\r\n        <br><br>\r\n    </div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var project_service_1 = __webpack_require__("./src/app/services/project.service.ts");
var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(projectService) {
        this.projectService = projectService;
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        this.getProject(1);
    };
    ProjectDetailsComponent.prototype.getProject = function (id) {
        return this.projectService.getProject(id);
    };
    ProjectDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-project-details',
            template: __webpack_require__("./src/app/components/project-details/project-details.component.html"),
            styles: [__webpack_require__("./src/app/components/project-details/project-details.component.css")]
        }),
        __metadata("design:paramtypes", [project_service_1.ProjectService])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());
exports.ProjectDetailsComponent = ProjectDetailsComponent;


/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>CREATE NEW ACCOUNT</h2>\r\n  <hr>\r\n  <form class=\"form-horizontal\" #registerForm=\"ngForm\" (ngSubmit)=\"add();\">\r\n      <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-2\" for=\"email\">First Name:</label>\r\n          <div class=\"col-sm-10\">\r\n              <input type=\"name\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\" name=\"firstName\" [(ngModel)]=\"model.firstName\">\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-2\" for=\"email\">Last Name:</label>\r\n          <div class=\"col-sm-10\">\r\n              <input type=\"name\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" name=\"lastName\" [(ngModel)]=\"model.lastName\">\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-2\" for=\"email\">User Name:</label>\r\n          <div class=\"col-sm-10\">\r\n              <input type=\"name\" class=\"form-control\" id=\"userName\" placeholder=\"User Name\" name=\"username\" [(ngModel)]=\"model.username\">\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\r\n          <div class=\"col-sm-10\">\r\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"model.email\">\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\r\n          <div class=\"col-sm-10\">\r\n              <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"password\" [(ngModel)]=\"model.passHash\">\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <div class=\"col-sm-offset-2 col-sm-10\">\r\n              <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n          </div>\r\n      </div>\r\n  </form>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_1 = __webpack_require__("./src/app/models/user.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.model = new user_1.User('', '', '', '', '');
    };
    RegisterComponent.prototype.add = function () {
        this.authService.register(this.model);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthenticationService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/models/project.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    function Project(name, description, managerId) {
        this.name = name;
        this.description = description;
        this.managerId = managerId;
    }
    return Project;
}());
exports.Project = Project;


/***/ }),

/***/ "./src/app/models/task.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(name, description, state, author, executor) {
        this.name = name;
        this.description = description;
        this.state = state;
        this.author = author;
        this.executor = executor;
    }
    ;
    return Task;
}());
exports.Task = Task;


/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(firstName, lastName, username, email, passwordHash) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.passwordHash = passwordHash;
    }
    ;
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var user = { Email: username, Password: password };
        this.http.post("/auth/login", user, this.options)
            .toPromise()
            .then(function (response) {
            localStorage.setItem('currentUser', JSON.stringify(response.json()));
            _this.router.navigateByUrl('/home');
        })
            .catch(function () {
            alert("Incorrect data!");
        });
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
    AuthenticationService.prototype.register = function (user) {
        var _this = this;
        return this.http
            .post('/api/account', JSON.stringify(user), this.options)
            .toPromise()
            .then(function (response) {
            _this.router.navigateByUrl('/login');
            alert("You have registered successfully");
            response.json().data;
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
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
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ "./src/app/services/project.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
var project_1 = __webpack_require__("./src/app/models/project.ts");
var ProjectService = /** @class */ (function () {
    function ProjectService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.projects = [
            new project_1.Project("NEznam1", "asdfasdf"),
            new project_1.Project("NEznam2", "asdfasdf"),
            new project_1.Project("NEznam3", "asdfasdf"),
            new project_1.Project("NEznam4", "asdfasdf"),
            new project_1.Project("NEznam5", "asdfasdf"),
            new project_1.Project("NEznam6", "asdfasdf"),
            new project_1.Project("NEznam7", "asdfasdf"),
            new project_1.Project("NEznam8", "asdfasdf"),
        ];
    }
    ProjectService.prototype.createProject = function (project) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('currentUser'));
        project.managerId = user.id;
        return this.http
            .post('/api/project', project, this.options)
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            _this.router.navigateByUrl('/home');
            alert("You have created project successfully.");
            response.json();
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    ProjectService.prototype.getProjects = function () {
        return this.http
            .get('/api/project', this.options)
            .toPromise()
            .then(function (response) {
            console.log(response);
            return response.json();
        })
            .catch(function () { return alert("An error has occurred!"); });
    };
    ProjectService.prototype.getProject = function (id) {
        var _this = this;
        return this.http
            .get('/api/project' + id, this.options)
            .toPromise()
            .then(function (response) {
            _this.router.navigateByUrl('/home');
            alert("You have created project successfully.");
            return response.json().data;
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    ProjectService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;


/***/ }),

/***/ "./src/app/services/task.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
var TaskService = /** @class */ (function () {
    function TaskService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    TaskService.prototype.getTask = function (id) {
        var _this = this;
        return this.http
            .get('/api/task/' + id, this.options)
            .toPromise()
            .then(function (response) {
            _this.router.navigateByUrl('/home');
            alert("You have created task successfully.");
            return response.json().data;
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    TaskService.prototype.createTask = function (task) {
        var _this = this;
        return this.http
            .post('/api/task', JSON.stringify(task), this.options)
            .toPromise()
            .then(function (response) {
            _this.router.navigateByUrl('/home');
            alert("You have created task successfully.");
            response.json().data;
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    TaskService.prototype.updateTask = function (task) {
        var _this = this;
        return this.http
            .put('/api/task', JSON.stringify(task), this.options)
            .toPromise()
            .then(function (response) {
            _this.router.navigateByUrl('/home');
            alert("You have created task successfully.");
            response.json().data;
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    TaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map