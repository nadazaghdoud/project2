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
  searchAdresse = '';
    listFavorites:Residence[]=[];
  listResidences:Residence[]=[]

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
     
    constructor(private rs:ResidenceService) { }
    ngOnInit(){
      this.rs.getResidence().subscribe(
        (data: Residence[]) => this.listResidences=data
 
      )
 
    }
    showLoc(adress : string){
      if (adress === "inconnu"){
         alert("Adresse inconnue");
      }else {
         console.log("Adresse: "+adress);
      }
    }
 
    like(r:Residence){
     if (!this.listFavorites.includes(r)){
       this.listFavorites.push(r);
     }
    }
 
   filterResidence(): Residence[] {
     return this.listResidences.filter((residence) => {
       return residence.address.toLowerCase().includes
       (this.searchAdresse.toLowerCase());
     } );
   }
 
    supp(id:number){
     this.rs.DeleteResidence(id).subscribe(
       ()=>this.ngOnInit()
     )
    }
 }