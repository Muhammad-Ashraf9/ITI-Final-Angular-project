import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { DateTimeComponent } from './parts/date-time/date-time.component';
import { FinalBillComponent } from './parts/final-bill/final-bill.component';
import { SeatsComponent } from './parts/seats/seats.component';
import { SnacksComponent } from './parts/snacks/snacks.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { UserFromServerComponent } from './user-from-server/user-from-server.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},

  {path:'loginregister',component:RegisterLoginComponent},

  {path:'adminlogin',component:AdminLoginComponent},
  {path:'adminPage',component:AdminPageComponent},

  {path:'userlist',component:UserFromServerComponent},
  {path:'Movies',component:MovieListComponent},
  {path:'MovieDTL/:id',component:MovieDetailsComponent},


  {path:'snacks',component:SnacksComponent},
  {path:'date',component:DateTimeComponent},
  {path:'finalBill',component:FinalBillComponent},
  {path:'seats',component:SeatsComponent},
  {path:'',redirectTo:'home' ,pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
