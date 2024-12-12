// ./app/header/header.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { PanierState } from '../shared/states/panier-state';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    nbProduitsPanier: number = 0;
    subscription!: Subscription;

    constructor(private store: Store) {}

    ngOnInit() {
      this.subscription = this.store.select(PanierState.getNbProduits).subscribe(value => {
        console.log('HeaderComponent: nbProduitsPanier =', value);
        this.nbProduitsPanier = value;
      });
    }

    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
}
