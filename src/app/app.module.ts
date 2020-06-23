import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { IpssiTooltipComponent } from './ipssi-tooltip/ipssi-tooltip.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageProduitComponent } from './page-produit/page-produit.component';



//Configuration des routes
const routes: Routes = [
  { path: 'accueil', component: PageHomeComponent },
  { path: 'produit', component: PageProduitComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];


@NgModule({
  declarations: [ // liste des composants / directives ... qu'on utilise dans ce module
    AppComponent,
    ProduitComponent,
    IpssiTooltipComponent,
    PageHomeComponent,
    PageProduitComponent
  ],
  imports: [ // liste des Modules qu'on utilise dans ce module
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent] // quel composant on démarre
})
export class AppModule { }
