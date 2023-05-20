import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { LUser } from './luser';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
users:Iuser[]=JSON.parse(localStorage.getItem('userData')!)
Lusers:LUser[]=JSON.parse(localStorage.getItem('LuserData')!)
  constructor() { }
userdata(){
  return this.users;
}
LUserdata(){
  return this.Lusers;
}
}
