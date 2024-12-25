import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Sem1bcComponent } from './Outils/moyenne/sem1bc/sem1bc.component';
import { MoyComponent } from './Outils/moyenne/moy/moy.component';
import { Sem2bcComponent } from './Outils/moyenne/sem2bc/sem2bc.component';
import { Sem3bcComponent } from './Outils/moyenne/sem3bc/sem3bc.component';
import { Sem5biComponent } from './Outils/moyenne/sem5bi/sem5bi.component';
import { Sem4bisComponent } from './Outils/moyenne/sem4bis/sem4bis.component';
import { Sem5bisComponent } from './Outils/moyenne/sem5bis/sem5bis.component';
import { Sem4biComponent } from './Outils/moyenne/sem4bi/sem4bi.component';
import { Sem4ebComponent } from './Outils/moyenne/sem4eb/sem4eb.component';
import { Sem5ebComponent } from './Outils/moyenne/sem5eb/sem5eb.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  //bc
  {path: 'moyenne/sem1', component: Sem1bcComponent},
  {path: 'moyenne/sem2', component: Sem2bcComponent},
  {path: 'moyenne/sem3', component: Sem3bcComponent},
  //bi
  {path: 'moyenne/sem4bi', component: Sem4biComponent},
  {path: 'moyenne/sem5bi', component: Sem5biComponent},
  //eb
  {path: 'moyenne/sem4eb', component: Sem4ebComponent},
  {path: 'moyenne/sem5eb', component: Sem5ebComponent},
  //bis
  {path: 'moyenne/sem4bis', component: Sem4bisComponent},
  {path: 'moyenne/sem5bis', component: Sem5bisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
