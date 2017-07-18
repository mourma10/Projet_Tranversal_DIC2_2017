import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TradingServices} from '../trading/trading.service';


@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html',
    providers: [TradingServices]
})

export class IconsComponent implements OnInit {
    libtrading: Params;
    tradings: Trading[] = [];

    constructor(private route: ActivatedRoute, private tradingServices: TradingServices) {

    }

    ngOnInit() {
        this.libtrading = this.route.snapshot.queryParams["libtrading"];
        this.tradingServices.listerTradings()
            .subscribe(tradings => {
                this.tradings = tradings;
            })
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

