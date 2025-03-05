import { Component } from '@angular/core';
import { Residence } from '../Core/Models/residence';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  color!:string
  title: string = "welcome 4arctic 7"
  prixProduit!:number
  products!:any[]
    constructor (private ps:ProductService){}


    ngOnInit(){
      this.products=this.ps.products
    }
  show(){
    alert ( "bonjour")
  }
  like(i: number) {
    this.products[i].like++
  }

  acheterProduit(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
    } else {
      alert("Stock épuisé !");
    }
  }

}