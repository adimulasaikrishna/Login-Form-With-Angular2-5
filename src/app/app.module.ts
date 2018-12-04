import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService}  from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { MainDashBoardComponent } from './components/main-dash-board/main-dash-board.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HrDetailsComponent } from './components/hr-details/hr-details.component';
import { ManagerDetailsComponent } from './components/manager-details/manager-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainDashBoardComponent,
    UserDetailsComponent,
    HrDetailsComponent,
    ManagerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
