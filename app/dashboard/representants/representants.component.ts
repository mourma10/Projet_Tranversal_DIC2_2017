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
        let self = this;
        this.representantService.listerRepresentants()
            .subscribe(representants => {
                self.representants = representants.items;
            });
    }

    ajouterRepresentant() {
        this.representantService.ajouterRepresentant(
            this.nom,
            this.prenom,
            this.email,
            this.adresse,
            this.telephone)
            .subscribe(response => {
                if (response === true) {
                    let rep: Representant = {
                        nomRepresentant: this.nom,
                        prenomRepresentant: this.prenom,
                        adresse: this.adresse,
                        tel: this.telephone,
                        user: {
                            username: this.email,
                            email: this.email,
                        },
                    };
                    this.representants.push(rep);
                }
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
