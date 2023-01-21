import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './Project/components/board/board.component';
import { DashboardComponent } from './Shell/components/dashboard/dashboard.component';
import { LogInComponent } from './Shell/components/log-in/log-in.component';
import { RegisterComponent } from './Shell/components/register/register.component';
import { StartComponent } from './Shell/components/start/start.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'start' },
  { path: 'start', component: StartComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'board', component: BoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
