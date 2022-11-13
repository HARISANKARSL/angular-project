import { LoginService } from './../login.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private serve:LoginService) { 
    
  }
  cartmsg=0;
  ngOnInit(): void {
    this.serve
  }

}
