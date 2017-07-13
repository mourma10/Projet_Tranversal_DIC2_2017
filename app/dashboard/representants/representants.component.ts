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
    representant: Representant = {
        id: 1,
        nomRepresentant: this.nom,
        prenomRepresentant: this.prenom,
        email: this.email,
        telephone: this.telephone
    };
    representants: Representant[];

    constructor(private representantService: RepresentantServices) {
    }

    ngOnInit() {
        this.representantService.listerRepresentants()
            .subscribe(representants => {
                this.representants = representants;
            });
    }

    ajouterRepresentant() {
        this.representantService.ajouterRepresentant(
            this.nom,
            this.prenom,
            this.email,
            this.telephone)
            .subscribe(response => {
                return response;
            });
        this.representants.push(this.representant);
        console.log(this.representant.prenomRepresentant);
    }


}

interface Representant {
    id: number;
    nomRepresentant: string;
    prenomRepresentant: string;
    email: string;
    telephone: string;
}
