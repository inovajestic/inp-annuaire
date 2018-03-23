import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CoordonneePage } from '../coordonnee/coordonnee';
import { PersonneProvider } from '../../providers/personne/personne';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personnes: Array<{nom: string, prenom: string, titre: string, ecole: string, filiere: string, telephone: string, email: string, lieu: string}>;

  constructor(public navCtrl: NavController, private personneProvider: PersonneProvider) {
    
    this.personnes = this.personneProvider.listePersonne();
  }

  afficheCoordonnee(event, personne) {
    this.navCtrl.push(CoordonneePage, {
      personne: personne
    });
  }

  recherchePersonne(event) {
    //Récupère la valeur à rechercher
    let val = event.target.value;
    
    this.personnes = this.personneProvider.recherchePersonne(val);
    if(val == '') {
      this.personnes = this.personneProvider.listePersonne();
    }
  }
}
