import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-coordonnee',
  templateUrl: 'coordonnee.html',
})
export class CoordonneePage {

  personneSelectionnee: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personneSelectionnee = navParams.get('personne');
    console.log(this.personneSelectionnee);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoordonneePage');
  }

}
