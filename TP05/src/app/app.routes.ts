import { Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

export const routes: Routes = [
    { path: '', component: CatalogueComponent }, // Route racine
    { path: 'panier', component: PanierComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
