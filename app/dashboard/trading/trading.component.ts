import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'trading-cmp',
    moduleId: module.id,
    templateUrl: 'trading.component.html'
})

export class TradingComponent {

    constructor(private router: Router,) {
    }

instruction()
        {
        this.router.navigate(['/icons']);
        }
}