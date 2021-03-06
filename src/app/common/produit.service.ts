import { Injectable } from '@angular/core';
import { Produit } from './produit';
import { Nutrients } from './nutrients';
import productsStub from './tableau_produits';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  // déclaration du tableau produits de type Produit
  tab: Produit[];
  produit: any;
  caroussel: any;

  constructor() {
    // Si la clé n'éxiste "produits" pas dans le local storage
    if (!localStorage.products) {
      // Initialisation du local storage et du tableau produits
      this.tab = productsStub.map((x) => {
        const produit = new Produit();
        produit.id = x['id'];
        produit.name = x['product_name'];
        produit.image = x['image'];
        produit.categories = x['categories'];
        produit.marque = x['brand'];
        produit.quantite = x['quantity'];
        produit.conditionnement = x['packaging'];
        produit.label = x['labels'];
        produit.pays = x['country'];
        produit.ingredients = x['ingredients'];
        produit.allergenes = x['allergenes'];
        produit.nova = x['nova'];
        produit.nutriscore = x['nutriscore'];

        produit.nutrients = new Nutrients();

        produit.nutrients.lipids = x.nutritional_value.lipides;
        produit.nutrients.sugar = x.nutritional_value.sugar;
        produit.nutrients.saturated = x.nutritional_value.saturated_fat;
        produit.nutrients.salt = x.nutritional_value.salt;
        produit.nutrients.energy = x.nutritional_value.energy;
        produit.nutrients.glucides = x.nutritional_value.glucides;
        produit.nutrients.fibres = x.nutritional_value.fibres_alimentaires;
        produit.nutrients.proteines = x.nutritional_value.proteines;
        produit.nutrients.sodium = x.nutritional_value.sodium;

        return produit;
      });
      this.saveToLocalStorage(this.tab);
    } else {
      // Si la clé "produits" existe récupération des donnée en conversion
      // en objet javascript (json)
      const data = JSON.parse(localStorage.products);
      // converte data to Produit model
      this.tab = data;
    }
  }

  /**
   * Save products displayed in slideshow
   * @param tab Prodcuts to save
   */
  saveSlideShow(tab) {
    // convert object to string
    const data = JSON.stringify(tab);
    // save string to local storage
    localStorage.setItem('image', data);
  }

  /**
   * Stringify and save data to local storage
   * @param produit Data to save
   */
  saveToLocalStorage(produit) {
    // convert object to string
    const data = JSON.stringify(produit);
    // save string to local storage
    localStorage.setItem('products', data);
  }

  // retourne le tableau des produits
  get(): Produit[] {
    return this.tab;
  }

  // tableau avec id
  getProduitById(id: string) {
    return this.tab.find(produit => produit.id === id);
  }

  // tableau avec categorie
  triByCategory(categories): Produit[] {
    const tabTri = this.tab.filter(produit => {
      if (produit.categories && produit.categories.includes(categories)) {
        return produit;
      }
    });
    return tabTri;
  }
  // tableau avec marque
  triByMarques(marques): Produit[] {
    const tabM = this.tab.filter(produit => {
      if (produit.marque && produit.marque.includes(marques)) {
        return produit;
      }
    });
    return tabM;
  }
  // tableau avec nutriment
  triByNutri(nutriscore): Produit[] {
    const tabNutri = this.tab.filter(produit => {
      if (produit.nutriscore && produit.nutriscore.includes(nutriscore)) {
        return produit;
      }
    });
    return tabNutri;
  }
  // tableau avec pays
  triByPays(pays): Produit[] {
    const tabPays = this.tab.filter(produit => {
      if (produit.pays && produit.pays.includes(pays)) {
        return produit;
      }
    });
    return tabPays;
  }
  // tableau avec conditionnement
  triByCondi(conditionnement): Produit[] {
    const tabCondi = this.tab.filter(produit => {
      if (produit.conditionnement && produit.conditionnement.includes(conditionnement)) {
        return produit;
      }
    });
    return tabCondi;
  }
  // tableau avec allergenes
  triByAller(allergenes): Produit[] {
    const tabAller = this.tab.filter(produit => {
      if (produit.allergenes && produit.allergenes.includes(allergenes)) {
        return produit;
      }
    });
    return tabAller;
  }
  // tableau avec resultat final
  triReg(str) {
    const regex = new RegExp(str, 'i');
    const tabFinal = this.tab.filter(produit => {
      if (produit.name.match(regex)) {
        return produit;
      } else if (produit.marque && produit.marque.match(regex)) {
        return produit;
      } else if (produit.ingredients && produit.ingredients.match(regex)) {
        return produit;
      } else if (produit.categories && produit.categories.join().match(regex)) {
        return produit;
      } else if (produit.allergenes && produit.allergenes.join().match(regex)) {
        return produit;
      } else if (produit.pays && produit.pays.match(regex)) {
        return produit;
      }
    });
    return tabFinal;
  }

  // tableau search
  getBySearch(search): Produit[] {
    const resultat = [];
    for (let i = 0; i < this.tab.length; i++) {
      if (search.toLowerCase() === this.tab[i].id.toLocaleLowerCase()) {
        resultat.push(this.tab[i]);
      }
      if (search.toLowerCase() === this.tab[i].marque.toLowerCase()) {
        resultat.push(this.tab[i]);
      }
      if (search.toLowerCase() === this.tab[i].name.toLowerCase()) {
        resultat.push(this.tab[i]);
      }
    }
    console.log(resultat);
    return resultat;
  }

  // ajouter produit
  ajouter(produit: Produit) {
    produit.id = this.tab.toString();
    this.tab.push(produit);
    this.saveToLocalStorage(this.tab);
  }
  // modifier produit
  update(element) {
    const index = this.tab.findIndex(product => product.id === element.id);
    this.tab[index] = element;
    this.saveToLocalStorage(this.tab);
}
  // recherche comparateur
    rechercheComp(search): Produit {
      for (let i = 0; i < this.tab.length; i++) {
        if (this.tab[i].name && this.tab[i].name.toLowerCase() === search.toLowerCase()) {
          this.produit = this.tab[i];
        }
      }
      return this.produit;
    }

}



