import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TradingServices} from './trading.service';


@Component({
    selector: 'trading-cmp',
    moduleId: module.id,
    templateUrl: 'trading.component.html',
    providers: [TradingServices]
})

export class TradingComponent implements OnInit {

    nomTransporteur: string;
    dateDebut: Date;
    destination: string;
    libelleMarchandise: string;
    quantite: number;
    libelleTrading: string;
    marchandises: Marchandise[] = [];
    tradings: Trading[] = [];


    constructor(private router: Router, private serviceTradings: TradingServices) {
    }

    ngOnInit() {
        this.serviceTradings.listerTradings()
            .subscribe(tradings => {
                this.tradings = tradings;
            })
    }

    detailTrading(trading: any) {
        this.router.navigate(['/icons'], {
            queryParams: {libtrading: trading.libelleTrading}
        });
    }

    addMarchandise() {
        
        let march: Marchandise = {
            libelleMarchandise: this.libelleMarchandise,
            quantite: this.quantite
        };
        this.marchandises.push(march);
        console.log(march.libelleMarchandise);
    }

    ajouterTrading() {
        let trading: Trading = {
            libelleTrading: this.libelleTrading,
            nomTransporteur: this.nomTransporteur,
            dateDebut: this.dateDebut,
            destination: this.destination,
            marchandises: this.marchandises
        };
        this.serviceTradings.ajouterTrading(trading);
        this.tradings.push(trading);
    }
}

interface Marchandise {
    libelleMarchandise: string;
    quantite: number;
}

interface Trading {
    libelleTrading: string;
    nomTransporteur: string,
    dateDebut: Date;
    destination: string;
    marchandises: Marchandise[];
}
