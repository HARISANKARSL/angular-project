import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';

import { Injectable, OnInit } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }
 
  login(email:string,pass:string){
    if(email==='harisankar123@gmail.com' && pass === '12345'){
      this.router.navigate(['/home'])
    }else{
      return 403;
    }
  
   
  }
 

}
