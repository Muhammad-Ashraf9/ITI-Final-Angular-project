import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myformRegister=new FormGroup({
    firstname:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl(Number,[Validators.required,Validators.minLength(11)])
  })

  constructor(private userserv:UserDataService ) {

  }

  ngOnInit(): void {
    this.userserv.userdata();
    let user=this.userserv.userdata();
    console.log(user);
  }
  get firstname(){
    return this.myformRegister.get('firstname') as FormControl;
  }
  get lastname(){
    return this.myformRegister.get('lastname') as FormControl;
  }
  get password(){
    return this.myformRegister.get('password') as FormControl;
  }
  get email(){
    return this.myformRegister.get('email') as FormControl;
  }
  get phone(){
    return this.myformRegister.get('phone') as FormControl;
  }
  login(data:any){
    console.log(data);
  }
  adduser(){
    let listUser=[];
    let user=this.myformRegister.value;
    listUser.push(user);
    localStorage.setItem('userData',JSON.stringify(listUser));
    console.log(listUser);
  }

}
