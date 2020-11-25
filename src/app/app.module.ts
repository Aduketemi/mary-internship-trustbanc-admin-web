import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
