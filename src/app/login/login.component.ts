import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
myform=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(8)])
})
  constructor(private router:Router,private userserver:UserDataService) { }

  ngOnInit(): void {
    this.userserver.LUserdata();
    let LUser=this.userserver.LUserdata();
    console.log(LUser);
  }
get email(){
  return this.myform.get('email') as FormControl;
}
get password(){
  return this.myform.get('password') as FormControl;
}
login(data:any){
  console.log(data);
}
onSubmit(){
  this.router.navigate(['/Movies'])
    }
    LUserdata(){
      let listUser=[];
      let LUser=this.myform.value;
      listUser.push(LUser);
      localStorage.setItem('userData',JSON.stringify(listUser));
      console.log(listUser);
    }
}
