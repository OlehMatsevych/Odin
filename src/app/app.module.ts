import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Shell/components/log-in/log-in.component';
import { RegisterComponent } from './Shell/components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { StartComponent } from './Shell/components/start/start.component';
import { DashboardComponent } from './Shell/components/dashboard/dashboard.component';
import { BoardComponent } from './Project/components/board/board.component';
import { SidepanelComponent } from './Shell/components/sidepanel/sidepanel.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PokerBoardComponent } from './Poker/components/poker-board/poker-board.component';
import { RetroBoardComponent } from './Retro/components/retro-board/retro-board.component';
import { PokerRoomComponent } from './Poker/components/poker-room/poker-room.component';

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
    PokerRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
