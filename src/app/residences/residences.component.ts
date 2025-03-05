import { Component } from '@angular/core';
import { Residence } from '../Core/Models/residence';
import { Router } from '@angular/router';
import { ResidenceService } from '../service/reidence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidenceComponent {

  /* listResidences:Residence[]=[
     {id:1,"name": "El fel","address":"Borj Cedria",
     "image":"../../assets/images/R1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine",
     "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
     "Disponible" },
     {id:3,"name": "El Arij",
     "address":"Rades","image":"../../assets/images/R3.jpg", status:
     "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu",
     "image":"../../assets/images/R4.jpg", status: "En Construction"}
     ];
 
     */
     listResidences!: Residence[] ;
    constructor(private rs:ResidenceService) { }
    ngOnInit(){
      this.rs.getResidence().subscribe(
        (data: Residence[]) => this.listResidences=data
 
      )
 
    }
 
    supp(id:number){
     this.rs.DeleteResidence(id).subscribe(
       ()=>this.ngOnInit()
     )
    }
 }