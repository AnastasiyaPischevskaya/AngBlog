import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {environment} from '../../environments/environment'
import {ActivatedRoute,Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

isAdmin:boolean = false;

private dataSourse = new BehaviorSubject<any>(this.isAdmin);
data = this.dataSourse.asObservable();


  constructor(private router:Router) { }

  loginUser(username,password){
    if(username === environment.admin.username && password === environment.admin.password)
    {
      this.isAdmin = true;
      this.dataSourse.next(this.isAdmin);
      this.router.navigate(['admin']); 
      console.log(username, password);
      
    }
   else {
        this.isAdmin = false
        console.log(username, password);
        
        }
  }
  logoutUser(){
    this.isAdmin = false;
    this.dataSourse.next(this.isAdmin);
  }
  checkIfAdmin(){
  return this.isAdmin;
  }
  
}
