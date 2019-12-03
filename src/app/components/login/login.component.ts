import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'
import {AuthService} from '../../services/auth.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

username = new FormControl('',Validators.required);
password = new FormControl('',Validators.required);


  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.username.valueChanges.subscribe((v)=>{
      console.log('-------',v);
      
    })
    this.password.valueChanges.subscribe((v)=>{
      console.log('-------',v);
      
    })
  }
  onSubmit(){
    this.authService.loginUser(this.username.value,this.password.value)
  }

}
