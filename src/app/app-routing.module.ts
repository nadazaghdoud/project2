import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { LoginComponent } from './login/login.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ResidenceComponent } from './residences/residences.component';
import { ResidenceDetailComponent } from './residences/residence-details/residence-details.component';

const routes: Routes = [
  {path:'products',component:HomeComponent},
{path : '' , redirectTo : 'login' , pathMatch : 'full'},
{path : 'detail/:id' , component : DetailProdComponent},
{path:'residences',component: ResidenceComponent},
{path:'login',component: LoginComponent},
{path:'AddRes',component: FormResidenceComponent},
{path:'AddRes/:id',component: FormResidenceComponent},
{path:'residenceDetail/:id',component: ResidenceDetailComponent},
{ path : '**'  ,  component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }