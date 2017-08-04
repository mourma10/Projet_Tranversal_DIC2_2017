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
    tradings: any[] = [];
    tradingId: any;

    constructor(private activatedRoute: ActivatedRoute,
                private tradingServices: TradingServices) {
    }

    ngOnInit() {
        let self = this;
        this.tradingServices.listerTradings()
            .subscribe(tradings => {
                self.tradings = tradings;
            });
    }
}