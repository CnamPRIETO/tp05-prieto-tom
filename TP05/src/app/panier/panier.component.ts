// ./app/panier/panier.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { PanierState } from '../shared/states/panier-state';
import { DelProduitDuPanier } from '../shared/actions/panier-action';
import { Produit } from '../models/produit';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit, OnDestroy {
  produitsPanier: Produit[] = [];
  subscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.subscription = this.store.select(PanierState.getProduitsPanier).subscribe(produits => {
      console.log('PanierComponent: produitsPanier =', produits);
      this.produitsPanier = produits;
    });
  }

  delFromPanier(produit: Produit) {
    console.log('PanierComponent: Dispatching DelProduitDuPanier', produit);
    this.store.dispatch(new DelProduitDuPanier(produit));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
