import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { AuthenticationService } from './services/auth.service';
import { CreateProjectComponent } from './components/create-project/create-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreateProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
