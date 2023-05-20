import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  Adminform=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  })
valid=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  get email(){
    return this.Adminform.get('email') as FormControl;
  }
  get password(){
    return this.Adminform.get('password') as FormControl;
  }
  login(data:any){
    // var AdminEmail=email;
    // var AdminPass=this.Adminform.passwpord;
    console.log(data);
  }
  path(){
        if( this.email.value== "ha2491717@gmail.com" && this.password.value == 123456789){
        this.router.navigate(['/adminPage']);
        }
        else{
          this.valid=false;
        }
  }
}
