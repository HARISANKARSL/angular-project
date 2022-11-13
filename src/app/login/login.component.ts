import { Router, RouterModule } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private auth:LoginService,private router :Router) { }
  loginform:any;
  errormsg=''
  emails;
  passw;
  ngOnInit(): void {

    this.loginform=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'pass':new FormControl('',[Validators.required])
    })
   
   
  }
  
  onsubmit(){
console.log(this.loginform)

  }
  get email(){
    return this.loginform.get('email')
  }
  get pass(){
    return this.loginform.get('pass')
  }
  login()
{
let res=this.auth.login(this.emails,this.passw);
if(res===200){
  this.router.navigate(['navbar'])
}if(res===403){
  this.errormsg='invalid user'
}
}
}
