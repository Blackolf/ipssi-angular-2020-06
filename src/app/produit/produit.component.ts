import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'produit-component',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produitForm: Produit = new Produit();

  @Input('titre') monTitre: string;
  @Input() autre: string;


  constructor() { }
  ngOnInit() { }

  @HostListener('click')
  public onClick() {
    console.log('clicked');
  }
}