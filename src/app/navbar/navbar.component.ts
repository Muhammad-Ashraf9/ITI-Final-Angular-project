import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
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
  logout(){
    this.authService.logout();
    // this.isAuthenticated=false;
    // this.router.navigate(['/loginregister'])

  }
  ngOnDestroy(): void {
   this.userSub?.unsubscribe();
  }

}
