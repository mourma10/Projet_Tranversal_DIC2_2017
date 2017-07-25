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
    adresse:string;
    clients: Client[];

    constructor() {
    }

    ngOnInit() {

    }
}

interface Client {
    id?: number;
    nomClient: string;
    prenomClient: string;
    email: string;
    telephone: string;
}