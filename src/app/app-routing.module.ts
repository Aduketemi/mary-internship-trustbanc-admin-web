import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './components/setup/setup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CantloginComponent } from './components/cantlogin/cantlogin.component';
import { SetpasswordComponent } from './components/setpassword/setpassword.component';

const routes: Routes = [
  { path: '', component: SetupComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'cantlogin', component: CantloginComponent},
  { path: 'setpassword', component: SetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
