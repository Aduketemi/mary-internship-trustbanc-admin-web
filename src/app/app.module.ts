import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SetupComponent } from './components/setup/setup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CantloginComponent } from './components/cantlogin/cantlogin.component';
import { SetpasswordComponent } from './components/setpassword/setpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SetupComponent,
    WelcomeComponent,
    CantloginComponent,
    SetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
