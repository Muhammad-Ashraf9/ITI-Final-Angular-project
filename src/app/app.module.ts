import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFromServerComponent } from './user-from-server/user-from-server.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { DateTimeComponent } from './parts/date-time/date-time.component';
import { SeatsComponent } from './parts/seats/seats.component';
import { SnacksComponent } from './parts/snacks/snacks.component';
import { FinalBillComponent } from './parts/final-bill/final-bill.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserFromServerComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    DateTimeComponent,
    SeatsComponent,
    HomeComponent,
    SnacksComponent,
    FinalBillComponent,
    RegisterLoginComponent,
    LoadingSpinnerComponent,
    AdminLoginComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
