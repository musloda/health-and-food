import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/login.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProduitService } from 'src/app/common/produit.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  products: { 'nom': string, 'image': string }[];
  closeResult: string;

  constructor(public loginService: LoginService, private modalService: NgbModal, public produitService: ProduitService) { }


  ngOnInit() {
    this.products = [{
    nom: 'kiri',
    image: `https://static.openfoodfacts.org/images/products/307/378/686/5191/front_fr.62.400.jpg`,
    },
    {
    nom: 'Fromage_de_chevre_Sainte_maure',
    image: `https://static.openfoodfacts.org/images/products/352/323/001/0559/front_fr.3.400.jpg`,
    },
    {
    nom: 'crunch',
    // tslint:disable-next-line:max-line-length
    image: `https://static.openfoodfacts.org/images/products/800/030/026/4388/front_fr.67.400.jpg`
    }];
    }
// Ouverture de modals
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then((result) => {
        this.produitService.saveSlideShow(this.products);
      })
      .catch(error => {
      });
  }
}
