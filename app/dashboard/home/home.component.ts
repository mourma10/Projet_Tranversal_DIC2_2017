import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import {UserService} from '../../authentification/useraccount.service';
import {User} from '../../authentification/useraccount.component';

declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    user: User;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        // get users from secure api end point
        this.userService.getUser()
            .subscribe(user => {
                this.user = user;
            });
        initDemo();
    }
}
