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
    //representant: Representant;
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
        /*this.representantService.ajouterRepresentant(
            this.nom,
            this.prenom,
            this.email,
            this.telephone)
            .subscribe(response => {
                return response;
            });*/
        let rep: Representant = {
            id: 1,
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            telephone: this.telephone
        };
        console.log(rep.prenom);
        this.representants.push(rep);
    }


}

interface Representant {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
}
