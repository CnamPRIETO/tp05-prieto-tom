// ./app/test/test.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { PanierState } from '../shared/states/panier-state';
import { AddProduitAuPanier } from '../shared/actions/panier-action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Test Panier</h2>
    <div>Nombre d'articles : {{ nbProduits }}</div>
    <button (click)="ajouterArticle()">Ajouter un article test</button>
  `
})
export class TestComponent implements OnInit, OnDestroy {
  nbProduits: number = 0;
  subscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.subscription = this.store.select(PanierState.getNbProduits).subscribe(value => {
      console.log('TestComponent: nbProduits =', value);
      this.nbProduits = value;
    });
  }

  ajouterArticle() {
    console.log('TestComponent: Dispatching AddProduitAuPanier');
    this.store.dispatch(new AddProduitAuPanier({ref:'test', prix:10, desc:'article test', stock:1}));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
