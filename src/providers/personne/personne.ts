import { Http  } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonneProvider {
  personnes: Array<{nom: string, prenom: string, titre: string, ecole: string, filiere: string, telephone: string, email: string, lieu: string}>;
  
  constructor(public http: Http) {
    this.remplirPersonne();
  }

  remplirPersonne() {
    this.personnes = [];
    this.personnes.push({
      nom: 'MOLOU',
      prenom: 'Yao Clair Samson',
      titre: 'ESI - ING INFO 2',
      ecole: "École Supérieure d'Industrie",
      filiere: 'Ingénieur Informatique',
      telephone: '+225 49 63 12 23',
      email: 'yao.molou@inphb.ci',
      lieu: 'Résidence P - Chambre 24'
    });

    this.personnes.push({
      nom: "N'GUESSAN",
      prenom: 'Éric Xavier',
      titre: 'ESI - ING TELECOM 2',
      ecole: "École Supérieure d'Industrie",
      filiere: 'Ingénieur Télécom',
      telephone: '+225 22 22 22 22',
      email: 'nguessan.eric@inphb.ci',
      lieu: 'Résidence P - Chambre 27'
    });

    this.personnes.push({
      nom: 'SON',
      prenom: 'Robert Michel',
      titre: 'ESMG - ING ETE 1',
      ecole: "École Supérieure des Mines et Géologie",
      filiere: 'Ingénieur Mines et Géologie',
      telephone: '+225 49 63 12 23',
      email: 'son.robert@inphb.ci',
      lieu: 'Résidence 12 - Chambre 75'
    });

    this.personnes.push({
      nom: 'TETY',
      prenom: 'Pierre',
      titre: 'Enseignant - Chercheur',
      ecole: "Génie Électrique et Électronique",
      filiere: 'Enseignant - Chercheur',
      telephone: '+225 49 63 12 23',
      email: 'peirre.tety@inphb.ci',
      lieu: 'Bureau 325 - GEE'
    });

    this.personnes.push({
      nom: 'TANNOH',
      prenom: 'Lambert',
      titre: 'Enseignant - Chercheur',
      ecole: "Mathématique - Informatique",
      filiere: 'Enseignant - Chercheur',
      telephone: '+225 49 63 12 23',
      email: 'lambert.tanoh@inphb.ci',
      lieu: 'Bureau 334, LARIMA'
    });

    this.personnes.push({
      nom: "N'GUESSAN",
      prenom: 'Koffi',
      titre: 'Directeur Général',
      ecole: "",
      filiere: '',
      telephone: '+225 49 63 12 23',
      email: 'koffi.nguessan@inphb.ci',
      lieu: 'Bureau 25 - Direction Générale'
    });

    this.personnes.push({
      nom: 'DIALLO',
      prenom: 'Kady Hamdalaye',
      titre: 'ESI - ING INFO 2',
      ecole: "École Supérieure d''Industrie",
      filiere: 'Ingénieure Informatique',
      telephone: '+225 49 63 12 23',
      email: 'kady.diallo@inphb.ci',
      lieu: 'Résidence F - Chambre 63'
    });
  }

  listePersonne() {
    return this.personnes;
  }

  recherchePersonne(term: string) : any {
    this.remplirPersonne();
    
    if(term && term.trim() != '') {
      this.personnes = this.personnes.filter((personne) => {
        if(personne.nom.toLowerCase().indexOf(term.toLowerCase()) > -1) {
          return personne;
        }
        if(personne.prenom.toLowerCase().indexOf(term.toLowerCase()) > -1) {
          return personne;
        }
        if(personne.filiere.toLowerCase().indexOf(term.toLowerCase()) > -1) {
          return personne;
        }
        if(personne.telephone.toLowerCase().indexOf(term.toLowerCase()) > -1) {
          return personne;
        }
        if(personne.ecole.toLowerCase().indexOf(term.toLowerCase()) > -1) {
          return personne;
        }
        if(personne.titre.toLowerCase().indexOf(term.toLowerCase()) > -1) {
          return personne;
        }
      });
      return this.personnes;
    }
  }
}
