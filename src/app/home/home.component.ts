import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//  1
  show1=false;
  hide1=true;
  rslt1;
  disbale1=true;
  disbaled1=true;
// 2
  show2=false;
  hide2=true;
  rslt2;
  disbale2=true;
  disbaled2=true;
// 3
  show3=false;
  hide3=true;
  rslt3;
  disbale3=true;
  disbaled3=true;
// 4

show4=false;
hide4=true;
rslt4;
disbale4=true;
disbaled4=true;

// 
rs;
 
 
  items;
  cart:boolean=false
  constructor(private serve:LoginService) { }

  ngOnInit(): void {
  }
  // 1
  onchange1(){
   
this.show1=true
this.items=1
this.hide1=false
this.rslt1=1;
this.cart=true
this.rs=260

  }
  dec1(){
this.rs -=260
this.rslt1-=1
if(this.rslt1<=0){
  this.disbale1=false
  this.hide1=true
  this.show1=false
 
 
}else{
  this.disbaled1=true
} if(this.rslt1===0){
  this.rs=260
 }
  }
 
      inc1(){
    this.rslt1+=1
   this.rs +=260
  
    if(this.rslt1==5){
      this.disbaled1=false
    }else{
      this.disbale1=true
    }
      }
       // 2
       onchange2(){
       
        this.rs=300
         this.show2=true
         this.items=1
         this.hide2=false
         this.rslt2=1;
         this.cart=true
         if(this.rs===0){
          this.rs=300
         }
    
           }
           dec2(){
            this.rs-=300
         this.rslt2-=1
         if(this.rslt2<=0){
           this.disbale2=false
           this.hide2=true
           this.show2=false
           
     
         }else{
           this.disbaled2=true
         }if(this.rslt2===0){
          this.rs=300
         }
           }
     
               inc2(){
             this.rslt2+=1
             this.rs+=300
             if(this.rslt2==5){
               this.disbaled2=false
             }else{
               this.disbale2=true
             }
               }
               // 3
               onchange3(){
                 this.show3=true
                 this.items=1
                 this.hide3=false
                 this.rslt3=1;
                 this.cart=true
            
                   }
                   dec3(){
                 this.rslt3-=1
                 if(this.rslt3<=0){
                   this.disbale3=false
                   this.hide3=true
                   this.show3=false
                 
                 }else{
                   this.disbaled3=true
                 }
                   }
             
                       inc3(){
                     this.rslt3+=1
                     if(this.rslt3==5){
                       this.disbaled3=false
                     }else{
                       this.disbale3=true
                     }
                       }
                       onchange4(){
                         this.show4=true
                         this.items=1
                         this.hide4=false
                         this.rslt4=1;
                         this.cart=true
                    
                           }
                           dec4(){
                         this.rslt4-=1
                         if(this.rslt4<=0){
                           this.disbale4=false
                           this.hide4=true
                           this.show4=false
                     
                         }else{
                           this.disbaled4=true
                         }
                           }
                     
                               inc4(){
                             this.rslt4+=1
                             if(this.rslt4==5){
                               this.disbaled4=false
                             }else{
                               this.disbale4=true
                             }
                            
}}
