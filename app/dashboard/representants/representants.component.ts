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
    representants: Representant[] = [];

    constructor(private representantService: RepresentantServices) {
    }

    ngOnInit() {
        let self = this;
        this.representantService.listerRepresentants()
            .subscribe(representants => {
                self.representants = representants.items;
            });
    }

    ajouterRepresentant() {
        let self = this;
        this.representantService.ajouterRepresentant(
            this.nom,
            this.prenom,
            this.email,
            this.adresse,
            this.telephone)
            .subscribe(response => {
                let rep: Representant = {
                    nomRepresentant: self.nom,
                    prenomRepresentant: self.prenom,
                    adresse: self.adresse,
                    tel: self.telephone,
                    user: {
                        username: self.email,
                        email: self.email,
                    },
                };

                self.representants.push(rep);
            });

    }


}

interface Representant {
    id?: number;
    nomRepresentant: string;
    prenomRepresentant: string;
    user: {
        username: string;
        email: string;
        roles?: any;
    };
    adresse: string;
    tel: string;
}
