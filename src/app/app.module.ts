import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';

@NgModule({
  declarations: [ // liste des composants / directives ... qu'on utilise dans ce module
    AppComponent,
    ProduitComponent
  ],
  imports: [ // liste des Modules qu'on utilise dans ce module
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // quel composant on démarre
})
export class AppModule { }
