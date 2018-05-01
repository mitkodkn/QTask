import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateProjectComponent } from './components/create-project/create-project.component'
import { MyProjectsComponent } from './components/my-projects/my-projects.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [ HomeComponent, LoginComponent, CreateProjectComponent ];
