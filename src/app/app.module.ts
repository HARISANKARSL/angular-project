import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component' ;




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NavitemsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
