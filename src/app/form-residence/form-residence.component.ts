import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../Core/Models/residence';
import { ResidenceService } from '../service/reidence.service';




@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {

  residenceForm: FormGroup;
  id!:number
  residence!:Residence
  constructor(private rs: ResidenceService, private rt:Router,private act:ActivatedRoute) {
    // Initialisation du formulaire avec FormGroup et FormControl
    this.residenceForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', Validators.required),
      image: new FormControl('', [Validators.required]),
      status: new FormControl('', Validators.required)
    });
  }

  ngOnInit(){
    //1-  recuper l'id de la residence
    this.id=this.act.snapshot.params['id']
    //2- recuperer l'objet residance
    this.rs.getResidenceById(this.id).subscribe(
      (data: Residence)=> {
        this.residence=data,
        console.log(this.residence)
        //3- initialiser le formulaire
        this.residenceForm.patchValue(this.residence)
      }
    )
  }

  // Fonction appelée lors de la soumission du formulaire
  save() {
      if (this.id){
        this.rs.updateResidence(this.residenceForm.value, this.id).subscribe(
          ()=> this.rt.navigateByUrl('/residences')
        )
      }else {
        this.rs.addResidence(this.residenceForm.value).subscribe(
          ()=> this.rt.navigateByUrl('/residences')
        )
      }



  }
}