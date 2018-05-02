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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* unused harmony export routedComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_create_project_create_project_component__ = __webpack_require__("./src/app/components/create-project/create-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_my_projects_my_projects_component__ = __webpack_require__("./src/app/components/my-projects/my-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_project_details_project_details_component__ = __webpack_require__("./src/app/components/project-details/project-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        "path": '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        "path": 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */],
    },
    {
        "path": 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        "path": 'create-project',
        component: __WEBPACK_IMPORTED_MODULE_4__components_create_project_create_project_component__["a" /* CreateProjectComponent */]
    },
    {
        "path": 'my-project',
        component: __WEBPACK_IMPORTED_MODULE_5__components_my_projects_my_projects_component__["a" /* MyProjectsComponent */]
    },
    {
        "path": 'project-details',
        component: __WEBPACK_IMPORTED_MODULE_6__components_project_details_project_details_component__["a" /* ProjectDetailsComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__components_create_project_create_project_component__["a" /* CreateProjectComponent */]];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__ = __webpack_require__("./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_create_project_create_project_component__ = __webpack_require__("./src/app/components/create-project/create-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_my_projects_my_projects_component__ = __webpack_require__("./src/app/components/my-projects/my-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_project_service__ = __webpack_require__("./src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_create_task_create_task_component__ = __webpack_require__("./src/app/components/create-task/create-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_project_details_project_details_component__ = __webpack_require__("./src/app/components/project-details/project-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_create_project_create_project_component__["a" /* CreateProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_my_projects_my_projects_component__["a" /* MyProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_create_task_create_task_component__["a" /* CreateTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_project_details_project_details_component__["a" /* ProjectDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_12__services_project_service__["a" /* ProjectService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create-project/create-project.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    margin-top: 30px;\r\n}\r\n\r\ninput,\r\nselect {\r\n    width: 85%;\r\n}\r\n\r\nform {\r\n    margin-bottom: 135px;\r\n    margin-top: 5%;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\ntextarea {\r\n    max-width: 800px\r\n}"

/***/ }),

/***/ "./src/app/components/create-project/create-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>CREATE NEW PROJECT</h2>\r\n    <hr>\r\n    <form class=\"form-horizontal\" #addProjectForm=\"ngForm\" (ngSubmit)=\"createProject();\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\"><span class=\"glyphicon glyphicon-check\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"model.name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">CREATE PROJECT</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ "./src/app/components/create-project/create-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("./src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_project__ = __webpack_require__("./src/app/models/project.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateProjectComponent = /** @class */ (function () {
    function CreateProjectComponent(jobsService) {
        this.jobsService = jobsService;
    }
    CreateProjectComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_project__["a" /* Project */]('');
    };
    CreateProjectComponent.prototype.createProject = function () {
        this.jobsService.createProject(this.model);
    };
    CreateProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-project',
            template: __webpack_require__("./src/app/components/create-project/create-project.component.html"),
            styles: [__webpack_require__("./src/app/components/create-project/create-project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]])
    ], CreateProjectComponent);
    return CreateProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/create-task/create-task.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create-task/create-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>LOGIN</h2>\r\n    <hr>\r\n    <form class=\"form-horizontal\" #loginForm=\"ngForm\" (ngSubmit)=\"login();\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\">User Name:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"name\" class=\"form-control\" id=\"userName\" placeholder=\"User Name\" name=\"username\" [(ngModel)]=\"model.username\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"password\" [(ngModel)]=\"model.passwordHash\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/components/create-task/create-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateTaskComponent = /** @class */ (function () {
    function CreateTaskComponent() {
    }
    CreateTaskComponent.prototype.ngOnInit = function () {
    };
    CreateTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-task',
            template: __webpack_require__("./src/app/components/create-task/create-task.component.html"),
            styles: [__webpack_require__("./src/app/components/create-task/create-task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home page\r\n  // TO DO\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '');
    };
    LoginComponent.prototype.login = function () {
        this.authenticationService.login(this.model.username, this.model.passwordHash);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/my-projects/my-projects.component.css":
/***/ (function(module, exports) {

module.exports = ".form-actions {\r\n    margin: 0;\r\n    background-color: transparent;\r\n    text-align: center;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\nimg {\r\n    max-width: 250px;\r\n    max-height: 150px;\r\n    /*\r\n    max-width: 100%;\r\n    height: auto */\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    display: block;\r\n}\r\n\r\nli {\r\n    display: inline-block;\r\n}\r\n\r\n.justify-content-center {\r\n    text-align: center;\r\n}\r\n\r\n.portfolio-item {\r\n    border: 1px solid black;\r\n}"

/***/ }),

/***/ "./src/app/components/my-projects/my-projects.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Page Content -->\r\n    <div class=\"container\">\r\n\r\n      <!-- Page Heading -->\r\n      <h1 class=\"my-4\">My Projects</h1>\r\n      <div class=\"row\">\r\n        <div *ngFor = 'let project of projects'>\r\n          <div class=\"col-lg-3 col-md-4 col-sm-6 portfolio-item\">\r\n            <div class=\"card h-100\">\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title\">\r\n                  <a routerLink=\"/project-details\">{{project.name}}</a>\r\n                  </h4>\r\n                  <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n          \r\n    <!-- Pagination -->\r\n      <ul class=\"pagination justify-content-center\">\r\n        <li class=\"page-item\">\r\n          <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n            <span aria-hidden=\"true\">&laquo;</span>\r\n            <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"page-item\">\r\n          <a class=\"page-link\" href=\"#\">1</a>\r\n        </li>\r\n        <li class=\"page-item\">\r\n          <a class=\"page-link\" href=\"#\">2</a>\r\n        </li>\r\n        <li class=\"page-item\">\r\n          <a class=\"page-link\" href=\"#\">3</a>\r\n        </li>\r\n        <li class=\"page-item\">\r\n          <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n            <span aria-hidden=\"true\">&raquo;</span>\r\n            <span class=\"sr-only\">Next</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n      <!-- /.container -->"

/***/ }),

/***/ "./src/app/components/my-projects/my-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("./src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-projects',
            template: __webpack_require__("./src/app/components/my-projects/my-projects.component.html"),
            styles: [__webpack_require__("./src/app/components/my-projects/my-projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]])
    ], MyProjectsComponent);
    return MyProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.logo {\r\n    height: 150%;\r\n    margin-top: -5px;\r\n}"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" routerLink=\"/home\"><img class=\"logo\" src=\"./../../../../Resources/logo.PNG\"> </a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n                <ul class=\"nav navbar-nav\">\r\n                        <li><a routerLink=\"/create-project\"><span class=\"ICON-CLASS\"></span> CREATE PROJECT</a></li>\r\n                </ul>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n              <li *ngIf=\"isLoggedIn()\"><a routerLink=\"/my-project\"><span class=\"glyphicon glyphicon-th\"></span> MY PROJECTS</a></li>\r\n              <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\" routerLink=\"/home\"><span class=\"glyphicon glyphicon-log-out\"></span> LOGOUT</a></li>\r\n              <li *ngIf=\"!isLoggedIn()\"><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\" ></span> LOGIN</a></li>\r\n          </ul>\r\n      </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/components/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthenticationService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/project-details/project-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h2 class=\"page-header\">Project</h2>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"members\" class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3 class=\"page-header\">Group Overview</h3>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-center\">\r\n            <img class=\"img-responsive img-rounded img-center\" src=\"http://placehold.it/200x200\" alt=\"\">\r\n            <h3><strong>Project NAME</strong></h3>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-8 text-left\">\r\n\r\n        </div>\r\n        <!--<div class=\"col-lg-4 col-sm-6 text-center\">\r\n        </div>-->\r\n        <div class=\"col-lg-4 col-sm-6 text-left\">\r\n            <h4 class=\"link\"><strong>GROUP INFORMATION</strong></h4>\r\n            <p><strong>Child members: </strong> Childrens</p>\r\n            <p><strong>Created by: </strong> Parent Name</p>\r\n            <p><strong>Created At: </strong> DD:MM:SS</p>\r\n            <br>\r\n            <h4 class=\"link\"><strong>OPTIONS</strong></h4>\r\n            <p><a class=\"btn btn-lg btn-warning\" routerLink=\"#\" role=\"button\" (click)=\"showClass = !showClass\">ADD CHILD</a></p>\r\n            <label [ngClass]=\"{ 'hidden': showClass }\">\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"childName\" placeholder=\"Child Name\">\r\n                </div>\r\n                <div class=\"col-sm-offset-2 col-sm-10\">\r\n                    <button type=\"submit\" class=\"btn btn-primary submit\">SUBMIT</button>\r\n                </div>\r\n            </label>\r\n            <p><a class=\"btn btn-lg btn-info\" routerLink=\"#\" role=\"button\" (click)=\"showClass1 = !showClass1\">ADD GROUP AVATAR</a></p>\r\n            <label [ngClass]=\"{ 'hidden': showClass1 }\">\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"Avatar\" placeholder=\"Avatar Url\">\r\n                </div>\r\n                <div class=\"col-sm-offset-2 col-sm-10\">\r\n                    <button type=\"submit\" class=\"btn btn-primary submit\">SUBMIT</button>\r\n                </div>\r\n            </label>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-left\">\r\n            <h4 class=\"link\"><strong>TODO LIST</strong></h4>\r\n            <div class=\"important-box\">\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\">\r\n                To study all new lessons for school\r\n              </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\">\r\n                To do all homework for tomorrow\r\n              </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\">\r\n                To go to swimming pool for workout\r\n              </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\">\r\n                To clean and organize your bedroom\r\n              </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\" >\r\n                To wash the dishes\r\n              </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\">\r\n                Go to walk with the dog\r\n              </label>\r\n                </div>\r\n            </div>\r\n            <p><a class=\"btn btn-lg btn-success right\" routerLink=\"/add-task\" role=\"button\">ADD NEW TASK</a></p>\r\n        </div>\r\n        <br><br>\r\n        <!--<div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n            </div>\r\n        </div>-->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <br><br>\r\n                <p>Fin more information about the app here: <a href=\"/about-us\" target=\"_blank\">ABOUT THE APP</a></p>\r\n                <p>Video tuttorial: <a href=\"/how-to-use\" target=\"_blank\">HOW TO USE IT</a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent() {
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
    };
    ProjectDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-details',
            template: __webpack_require__("./src/app/components/project-details/project-details.component.html"),
            styles: [__webpack_require__("./src/app/components/project-details/project-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/models/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(name) {
        this.name = name;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
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



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_project__ = __webpack_require__("./src/app/models/project.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectService = /** @class */ (function () {
    function ProjectService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.projects = [
            new __WEBPACK_IMPORTED_MODULE_4__models_project__["a" /* Project */]("NEznam1"),
            new __WEBPACK_IMPORTED_MODULE_4__models_project__["a" /* Project */]("NEznam2"),
            new __WEBPACK_IMPORTED_MODULE_4__models_project__["a" /* Project */]("NEznam3"),
            new __WEBPACK_IMPORTED_MODULE_4__models_project__["a" /* Project */]("NEznam4"),
            new __WEBPACK_IMPORTED_MODULE_4__models_project__["a" /* Project */]("NEznam5"),
            new __WEBPACK_IMPORTED_MODULE_4__models_project__["a" /* Project */]("NEznam6"),
            new __WEBPACK_IMPORTED_MODULE_4__models_project__["a" /* Project */]("NEznam7"),
            new __WEBPACK_IMPORTED_MODULE_4__models_project__["a" /* Project */]("NEznam8"),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map