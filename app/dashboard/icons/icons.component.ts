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
    trading: Trading;
    tradingId:number;

    constructor(private route: ActivatedRoute, private tradingServices: TradingServices) {
        this.tradingId = this.route.snapshot.queryParams["tradingId"];
    }

    ngOnInit() {
        let self = this;
        this.tradingServices.infoTrading(this.tradingId)
            .subscribe(trading => {
                self.trading = trading;

            });
        console.log(this.trading);
    }


}


interface Trading {
    libelle: string;
    transporteurId: number,
    dateDebut: Date;
    destination: string;
    instructionsLivraison: any[];
}
