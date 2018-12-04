import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainDashBoardComponent} from './components/main-dash-board/main-dash-board.component';
import { UserDetailsComponent} from './components/user-details/user-details.component';
import { HrDetailsComponent} from './components/hr-details/hr-details.component';
import { ManagerDetailsComponent} from './components/manager-details/manager-details.component';

const routes: Routes = [

  {path:'userLogin',component:LoginComponent},
  {path:'userLoginSuccess',component:MainDashBoardComponent},
  {path:'userPage',component:UserDetailsComponent},
  {path:'hrPage',component:HrDetailsComponent},
  {path:'managerPage',component:ManagerDetailsComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
