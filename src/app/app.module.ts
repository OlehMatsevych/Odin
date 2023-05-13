import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Shell/components/log-in/log-in.component';
import { RegisterComponent } from './Shell/components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartComponent } from './Shell/components/start/start.component';
import { DashboardComponent } from './Shell/components/dashboard/dashboard.component';
import { BoardComponent } from './Project/components/board/board.component';
import { SidepanelComponent } from './Shell/components/sidepanel/sidepanel.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PokerBoardComponent } from './Poker/components/poker-board/poker-board.component';
import { RetroBoardComponent } from './Retro/components/retro-board/retro-board.component';
import { PokerRoomComponent } from './Poker/components/poker-room/poker-room.component';
import { AnalyticsBoardComponent } from './Analytics/components/analytics-board/analytics-board.component';
import { ProjectsBoardComponent } from './Project/components/projects-board/projects-board.component';
import { RoadmapListComponent } from './Roadmap/components/roadmap-list/roadmap-list.component';
import { PeopleListComponent } from './People/components/people-list/people-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InviteUsersModalComponent } from './People/components/invite-users-modal/invite-users-modal.component';
import { CreateSprintModalComponent } from './Project/components/create-sprint-modal/create-sprint-modal.component';
import { ItemPageComponent } from './Project/components/item-page/item-page.component';
import { NgxEditorModule } from 'ngx-editor';
import { JwtInterceptor } from './_common/helpers/jwt.interceptor';
import { CreateProjectModalComponent } from './Project/components/create-project-modal/create-project-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        LogInComponent,
        RegisterComponent,
        StartComponent,
        DashboardComponent,
        BoardComponent,
        SidepanelComponent,
        PokerBoardComponent,
        RetroBoardComponent,
        PokerRoomComponent,
        AnalyticsBoardComponent,
        ProjectsBoardComponent,
        RoadmapListComponent,
        PeopleListComponent,
        InviteUsersModalComponent,
        CreateSprintModalComponent,
        ItemPageComponent,
        CreateProjectModalComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        DragDropModule,
        FormsModule,
        HttpClientModule,
        NgxEditorModule
    ]
})
export class AppModule { }
