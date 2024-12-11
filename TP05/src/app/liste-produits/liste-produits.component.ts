import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-liste-produits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-produits.component.html',
  styleUrl: './liste-produits.component.css'
})
export class ListeProduitsComponent {
 @Input() produits: Produit[] = [];
}
