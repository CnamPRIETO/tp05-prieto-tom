import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { PanierState } from '../shared/states/panier-state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    private store = inject(Store);
    nbProduitsPanier$!: Observable<number>;

    constructor() {
        this.nbProduitsPanier$ = this.store.select(PanierState.getNbProduits);
    }
}
