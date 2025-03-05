import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})

export class AddResidenceComponent {
  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    Image: new FormControl(''),
    status: new FormControl(''),
  });
  SaveResidence(F:FormGroup){
    console.log(F);
  }

}
