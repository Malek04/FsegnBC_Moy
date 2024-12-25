import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Sem1bcComponent } from './Outils/moyenne/sem1bc/sem1bc.component';
import { MoyComponent } from './Outils/moyenne/moy/moy.component';
import { Sem2bcComponent } from './Outils/moyenne/sem2bc/sem2bc.component';
import { Sem3bcComponent } from './Outils/moyenne/sem3bc/sem3bc.component';
import { Sem4biComponent } from './Outils/moyenne/sem4bi/sem4bi.component';
import { Sem4ebComponent } from './Outils/moyenne/sem4eb/sem4eb.component';
import { Sem4bisComponent } from './Outils/moyenne/sem4bis/sem4bis.component';
import { Sem5biComponent } from './Outils/moyenne/sem5bi/sem5bi.component';
import { Sem5ebComponent } from './Outils/moyenne/sem5eb/sem5eb.component';
import { Sem5bisComponent } from './Outils/moyenne/sem5bis/sem5bis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Sem1bcComponent,
    MoyComponent,
    Sem2bcComponent,
    Sem3bcComponent,
    Sem4biComponent,
    Sem4ebComponent,
    Sem4bisComponent,
    Sem5biComponent,
    Sem5ebComponent,
    Sem5bisComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
