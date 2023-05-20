import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { AuthResponseData } from './auth-response-data';
import { User } from './register-login/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user=new Subject<User>();
  user = new BehaviorSubject<User | null>(null);

  constructor(private http:HttpClient ,private router:Router) { }

  register( email:string,password:string){
   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5ZKLRCc28bGK0MzbMChFGEmofQR5_Jq8'
   , { email:email,
    password:password,
  returnSecureToken:true }).pipe(tap(resData=>{
    const expirationDate=new Date(new Date().getTime()+ +resData.expiresIn*1000);
    const user=new User(resData.email,resData.localId,resData.idToken,expirationDate);
    this.user.next(user);
    localStorage.setItem('userData',JSON.stringify(user));
  })) ;

  }
  login(email:string,password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5ZKLRCc28bGK0MzbMChFGEmofQR5_Jq8'
    , { email:email,
     password:password,
   returnSecureToken:true }).pipe(tap(resData=>{
    const expirationDate=new Date(new Date().getTime()+ +resData.expiresIn*1000);
    const user=new User(resData.email,resData.localId,resData.idToken,expirationDate);
    this.user.next(user);
    localStorage.setItem('userData',JSON.stringify(user));

  }));

  }
  autoLogin(){
    const userData :{        
       email:String,
       id:String,
       _token:String,
       _tokenExpirationDate:Date,}=JSON.parse(localStorage.getItem('userData') || '{}');
       if(!userData){
        return;
       }
       const loadedUser=new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));
       if(loadedUser.token){
        this.user.next(loadedUser);
       }

  }
  logout(){
    this.user.next(null);
    this.router.navigate(['/home']);
  }
}
