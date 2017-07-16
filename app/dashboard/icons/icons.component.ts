import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html'
})

export class IconsComponent implements OnInit {
    parametre: Params;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.parametre = this.route.snapshot.queryParams["trading"];
        console.log(this.parametre);
    }

}

