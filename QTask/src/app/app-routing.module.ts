import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateProjectComponent } from './components/create-project/create-project.component'
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { MyPendingTasksComponent } from './components/my-pending-tasks/my-pending-tasks.component';

const routes: Routes = [
  {
    "path": '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    "path": 'home',
    component: HomeComponent,
  },
  {
    "path": 'login',
    component: LoginComponent
  },
  {
    "path": 'create-project',
    component: CreateProjectComponent
  },
  {
    "path": 'my-project',
    component: MyProjectsComponent
  },
  {
    "path": 'project-details',
    component: ProjectDetailsComponent
  },
  {
    "path": 'register',
    component: RegisterComponent
  },
  {
    "path": 'create-task',
    component: CreateTaskComponent
  },
  {
    "path": 'edit-task',
    component: EditTaskComponent
  },
  {
    "path": 'my-pending-tasks',
    component: MyPendingTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [ HomeComponent, LoginComponent, CreateProjectComponent ];
