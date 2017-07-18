import {Component, OnInit} from '@angular/core';

import {RepresentantServices} from './representants.service';

@Component({
    moduleId: module.id,
    templateUrl: 'representants.component.html',
    providers: [RepresentantServices]
})

export class RepresentantsComponent implements OnInit {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    adresse: string;
    ajoutOk: Boolean = false;
    representants: Representant[] = [];

    constructor(private representantService: RepresentantServices) {
    }

    ngOnInit() {
        /*this.representantService.listerRepresentants()
            .subscribe(representants => {
                this.representants = representants;
            });*/
    }

    ajouterRepresentant() {
        this.representantService.ajouterRepresentant(
            this.nom,
            this.prenom,
            this.email,
            this.adresse,
            this.telephone)
            .subscribe(response => {
                return response;
            });
        let rep: Representant = {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            adresse: this.adresse,
            telephone: this.telephone
        };
        this.ajoutOk = true;
        this.representants.push(rep);
    }


}

interface Representant {
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    adresse: string;
    telephone: string;
}
