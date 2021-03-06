import { Component, OnInit } from '@angular/core';
import { Produit } from '../common/produit';
import { ProduitService } from '../common/produit.service';
import { Nutrients } from '../common/nutrients';
import { LoginService } from '../common/login.service';

@Component({
  selector: 'app-creer-produit',
  templateUrl: './creer-produit.component.html',
  styleUrls: ['./creer-produit.component.css']
})
export class CreerProduitComponent implements OnInit {
   // produit à créer
  produit: Produit;

  constructor(private produitService: ProduitService, public loginService: LoginService) { }

  ngOnInit() {
    this.produit = new Produit();
    this.produit.nutrients = new Nutrients();
  }

  /**
   * Ajout d'un élément à la produit list
   */
  ajouter() {
    this.produitService.ajouter(this.produit);
    this.produit = new Produit();
    this.produit.nutrients = new Nutrients();
  }

}
