import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsBoardComponent } from './Analytics/components/analytics-board/analytics-board.component';
import { PokerBoardComponent } from './Poker/components/poker-board/poker-board.component';
import { PokerRoomComponent } from './Poker/components/poker-room/poker-room.component';
import { BoardComponent } from './Project/components/board/board.component';
import { ProjectsBoardComponent } from './Project/components/projects-board/projects-board.component';
import { RetroBoardComponent } from './Retro/components/retro-board/retro-board.component';
import { RoadmapListComponent } from './Roadmap/components/roadmap-list/roadmap-list.component';
import { DashboardComponent } from './Shell/components/dashboard/dashboard.component';
import { LogInComponent } from './Shell/components/log-in/log-in.component';
import { RegisterComponent } from './Shell/components/register/register.component';
import { StartComponent } from './Shell/components/start/start.component';
import { PeopleListComponent } from './People/components/people-list/people-list.component';
import { ItemPageComponent } from './Project/components/item-page/item-page.component';
import { AuthGuard } from './_common/helpers/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'start' },
  { path: 'start', component: StartComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: 'roadmap', component: RoadmapListComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ProjectsBoardComponent, canActivate: [AuthGuard] },
  { path: 'item', component: ItemPageComponent, canActivate: [AuthGuard] },
  { path: 'people', component: PeopleListComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'board', component: BoardComponent, canActivate: [AuthGuard] },
  { path: 'poker', component: PokerBoardComponent, canActivate: [AuthGuard] },
  { path: 'poker/room', component: PokerRoomComponent, canActivate: [AuthGuard] },
  { path: 'retro', component: RetroBoardComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: AnalyticsBoardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
