/**
 * Created by BigAthepa on 14/07/2017.
 */
import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import {DashboardclientServices} from './dashboardclient.service';


declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'dashboardclient.component.html',
    providers: [DashboardclientServices]
})

export class DashboardclientComponent implements OnInit {
    nomRepresentant : string;
    libelle: string;
    quantite: number;
    marchandise: Marchandise = {
        libelle: this.libelle,
        quantite : this.quantite
    };

    marchandises : Marchandise[];

    commande : Commande = {
        nomRepresentant : this.nomRepresentant,
        marchandises : this.marchandises
    };

    commandes : Commande[];

    constructor(private dashboardclientService: DashboardclientServices) {
    }

    ngOnInit() {
        this.dashboardclientService.listerCommandes()
            .subscribe(commandes => {
                this.commande = commandes;
            });
    }

    ajouterCommande() {
        this.dashboardclientService.ajouterCommande(
            this.nomRepresentant,
            this.marchandises
            )
            .subscribe(response => {
                return response;
            });
        this.commandes.push(this.commande);
        console.log(this.commande.nomRepresentant);
    }

}

interface Marchandise {
    id?: number;
    libelle: string;
    quantite: number;

}

interface Commande {
    id?: number;
    nomRepresentant: string;
    marchandises: Marchandise[];

}