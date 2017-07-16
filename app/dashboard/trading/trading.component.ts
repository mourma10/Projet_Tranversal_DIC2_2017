import {Component} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';


@Component({
    selector: 'trading-cmp',
    moduleId: module.id,
    templateUrl: 'trading.component.html'
})

export class TradingComponent {
    trading = 'tradingo123';

    constructor(private router: Router,) {
    }

    instruction() {
        this.router.navigate(['/icons'], {queryParams: {trading: this.trading}});
    }
}