import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Residence } from './Core/Models/residence';

const routes: Routes = [
  {path: 'residences', component: Residence}, from './residences/residences.component.ts',
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
