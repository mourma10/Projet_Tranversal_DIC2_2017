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
        let self= this;
        this.transporteurService.ajouterTransporteur(
            this.nom,
            this.prenom,
            this.email,
            this.telephone,
            this.adresse)
            .subscribe(response => {
                    let trans: Transporteur = {
                        nomTransporteur: self.nom,
                        prenomTransporteur: self.prenom,
                        adresse: self.adresse,
                        telTransporteur: self.telephone,
                        user: {
                            username: self.email,
                            email: self.email,
                        },
                    };
                    self.transporteurs.push(trans);
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
    telTransporteur: string;

}
