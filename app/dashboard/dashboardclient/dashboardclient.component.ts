import {Component, OnInit} from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import {DashboardclientServices} from './dashboardclient.service';
import {RepresentantServices} from '../representants/representants.service';
import {MarchandiseService} from '../marchandises/marchandises.service';

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'dashboardclient.component.html',
    providers: [
        DashboardclientServices,
        RepresentantServices,
        MarchandiseService
    ]
})

export class DashboardclientComponent implements OnInit {
    nomRepresentant: string;
    libelle: string;
    quantite: number;
    marchandises: Marchandise[];
    marchandisesClient: Marchandise[] = [];
    commandes: Commande[] = [];
    representants: any[];

    constructor(private dashboardclientService: DashboardclientServices,
                private representantService: RepresentantServices,
                private marchandiseService: MarchandiseService) {
    }

    ngOnInit() {
        let self = this;
        this.dashboardclientService.listerCommandes()
            .subscribe(commandes => {
                self.commandes = commandes;
            });
        this.representantService.listerRepresentants()
            .subscribe(representants => {
                self.representants = representants;
            });
        this.marchandiseService.listerMarchandises()
            .subscribe(marchandises => {
                this.marchandises = marchandises;
            })
    }

    ajouterMarchandise() {
        let marchandiseClient: Marchandise = {
            libelle: this.libelle,
            quantite: this.quantite
        };
        this.marchandisesClient.push(marchandiseClient);
    }

    ajouterCommande() {
        let commande: Commande = {
            nomRepresentant: this.nomRepresentant,
            marchandisesClient: this.marchandisesClient
        };
        this.commandes.push(commande);
        this.dashboardclientService.ajouterCommande(commande)
            .subscribe(response => {
                return response;
            });
    }

}

interface Marchandise {
    libelle: string;
    quantite: number;
}

interface Commande {
    nomRepresentant: string;
    marchandisesClient: Marchandise[];

}