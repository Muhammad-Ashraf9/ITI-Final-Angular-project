import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  isAuthenticated=false;
  private userSub?:Subscription;

  constructor(private authService:AuthService,private router:Router) { }


  ngOnInit(): void {
    this.userSub=this.authService.user.subscribe(user=>{
      this.isAuthenticated=!!user;
     //  console.log(!user);
     //  console.log(!!user);
   
   });
  }
  onClick(){
     if(this.isAuthenticated){
      this.router.navigate(['/Movies'])


     }
     else{
      this.router.navigate(['/loginregister'])


     }

  }
  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

}
