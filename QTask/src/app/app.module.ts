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

import { AuthenticationService } from './services/auth.service';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreateProjectComponent,
    HomeComponent,
    LoginComponent
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
