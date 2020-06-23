import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  title = 'ang';
  couleur = 'black';

  ngOnInit() {
  }

  produits: Array<Produit> = new Array<Produit>(
    new Produit('GoPro HERO 6', 499.99),
    new Produit('GoPro HERO 7', 109));
  
  produitForm: Produit = new Produit();




  public changeTitle() {
    this.title = "autre titre";
  }

  public addProduit() {
    this.produits.push(this.produitForm);
    this.produitForm = new Produit();
  }
}
