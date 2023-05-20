import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {
isLogin=true;
isLoading=false;
error=null;
  constructor(private authserv:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  switchLogin(){
    this.isLogin=!this.isLogin;

  }
  onSubmit(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    if(this.isLogin){
      this.isLoading=true;


      this.authserv.login(email,password).subscribe(
        response=>{ 
           console.log(response);
           this.isLoading=false;
           this.router.navigate(['/Movies'])

      },
      error=>{
        console.log(error);
        this.error=error.error.error.message;
        this.isLoading=false;



      }
      );
      

    }else{


      this.isLoading=true;


      this.authserv.register(email,password).subscribe(
        response=>{ 
           console.log(response);
           this.isLoading=false;
           this.router.navigate(['/Movies'])


      },
      error=>{
        console.log(error);
        this.error=error.error.error.message;
        this.isLoading=false;



      }
      );
    }
   
  }

}
