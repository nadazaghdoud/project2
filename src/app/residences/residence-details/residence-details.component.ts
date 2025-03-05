import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Residence } from '../../Core/Models/residence';
import { ResidenceService } from 'src/app/service/reidence.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailComponent {
  constructor(private rs:ResidenceService, private Ac:ActivatedRoute) { }
  id!:number ;
  residence!: Residence ;
  ngOnInit(){
    this.id=this.Ac.snapshot.params['id'] // recuperatio id depuis url

    //  récuperation de l'objet par ID  (residence)
    this.rs.getResidenceById(this.id).subscribe(
      (data: Residence) => this.residence = data
    )

  }
}