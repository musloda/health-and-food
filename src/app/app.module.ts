import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

import { IndexComposantsComponent  } from './index-composants/index-composants.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { PagetriComponent} from './pagetri/pagetri.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PageProduitsComponent } from './page-produits/page-produits.component';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { AppRoutingModule } from './app-routing.module';
import { AdvsearchComponent } from './advsearch/advsearch.component';
import { CreerProduitComponent } from './creer-produit/creer-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { MessagerieComponent } from './messagerie/messagerie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    FooterComponent,
    PagetriComponent,
    IndexComposantsComponent,
    PageProduitsComponent,
    ComparateurComponent,
    SearchPageComponent,
    AdvsearchComponent,
    CreerProduitComponent,
    ModifierProduitComponent,
    MessagerieComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
