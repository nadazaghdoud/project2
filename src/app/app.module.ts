import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { LoginComponent } from './login/login.component';
import { ModelsComponent } from './models/models.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResidenceComponent } from './residences/residences.component';
import { ResidenceDetailComponent } from './residences/residence-details/residence-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidenceComponent,
    NotFoundComponent,
    NavbarComponent,
    DetailProdComponent,
    LoginComponent,
    ResidenceDetailComponent,
    AddResidenceComponent,
    FormResidenceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }