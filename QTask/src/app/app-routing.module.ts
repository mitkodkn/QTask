import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/public/login/login.component';
import { HomeComponent } from './components/public/home/home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [ RegisterComponent, LoginComponent, HowToUseComponent, AboutUsComponent, ContactsComponent, ParentGuideComponent, TeenJobsComponent, HomeComponent, FooterComponent, MyProfileComponent, UpdateInfoComponent, MyGroupComponent, JobsComponent, SingleJobComponent, AddJobComponent, DonateComponent, AddTaskComponent ];
