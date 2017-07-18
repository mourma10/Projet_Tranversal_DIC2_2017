import { Component , OnInit} from '@angular/core';
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
    transporteur: Transporteur = {
        id: 1,
        nomTransporteur: this.nom,
        prenomTransporteur: this.prenom,
        email: this.email,
        telephone: this.telephone
    };
    transporteurs: Transporteur[] = [];

    constructor(private transporteurService: TransporteursServices) {
    }

    ngOnInit() {
        this.transporteurService.listerTransporteurs()
            .subscribe(transporteurs => {
                this.transporteurs = transporteurs;
            });
    }

    ajouterTransporteur() {
        this.transporteurService.ajouterTransporteur(
            this.nom,
            this.prenom,
            this.email,
            this.telephone)
            .subscribe(response => {
                return response;
            });
        this.transporteurs.push(this.transporteur);
        console.log(this.transporteur.prenomTransporteur);
    }


}

interface Transporteur {
    id: number;
    nomTransporteur: string;
    prenomTransporteur: string;
    email: string;
    telephone: string;
}
