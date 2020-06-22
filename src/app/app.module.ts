import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { IpssiTooltipComponent } from './ipssi-tooltip/ipssi-tooltip.component';

@NgModule({
  declarations: [ // liste des composants / directives ... qu'on utilise dans ce module
    AppComponent,
    ProduitComponent,
    IpssiTooltipComponent
  ],
  imports: [ // liste des Modules qu'on utilise dans ce module
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // quel composant on démarre
})
export class AppModule { }
