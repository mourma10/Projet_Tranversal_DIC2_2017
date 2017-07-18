import {Component, OnInit} from '@angular/core';
import {TransporteursServices} from './transporteurs.service';


@Component({
    moduleId: module.id,
    templateUrl: 'transporteurs.component.html',
    providers: [TransporteursServices]

})

export class TransporteursComponent implements OnInit {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    adresse: string;
    transporteurs: Transporteur[] = [];

    constructor(private transporteurService: TransporteursServices) {
    }

    ngOnInit() {
        let self = this;
        this.transporteurService.listerTransporteurs()
            .subscribe(transporteurs => {
                self.transporteurs = transporteurs.items;
            });
    }

    ajouterTransporteur() {
        this.transporteurService.ajouterTransporteur(
            this.nom,
            this.prenom,
            this.email,
            this.telephone,
            this.adresse)
            .subscribe(response => {
                if (response === true) {
                    let rep: Transporteur = {
                        nomTransporteur: this.nom,
                        prenomTransporteur: this.prenom,
                        adresse: this.adresse,
                        tel: this.telephone,
                        user: {
                            username: this.email,
                            email: this.email,
                        },
                    };
                    this.transporteurs.push(rep);
                }
            });
    }


}

interface Transporteur {
    id?: number;
    nomTransporteur: string;
    prenomTransporteur: string;
    user: {
        email: string;
        username: string;
        roles?: any;
    };
    adresse: string;
    tel: string;

}
