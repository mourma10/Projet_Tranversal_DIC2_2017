import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'dashboardrepresentant.component.html'
})

export class DashboardrepresentantComponent implements OnInit {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    client: Client = {
        nomClient: this.nom,
        prenomClient: this.prenom,
        email: this.email,
        telephone: this.telephone
    };
    clients: Client[];

    constructor() {
    }

    ngOnInit() {
        initDemo();
    }
}

interface Client {
    id?: number;
    nomClient: string;
    prenomClient: string;
    email: string;
    telephone: string;
}