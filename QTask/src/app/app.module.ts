import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';

import { AuthenticationService } from './services/auth.service';
import { ProjectService } from './services/project.service';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { RegisterComponent } from './components/register/register.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreateProjectComponent,
    HomeComponent,
    LoginComponent,
    MyProjectsComponent,
    CreateTaskComponent,
    ProjectDetailsComponent,
    RegisterComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
