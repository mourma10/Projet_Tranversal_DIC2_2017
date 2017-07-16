import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthentificationService} from './authentification.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    username: string;
    password: string;
    role: string;
    loading = false;
    error = '';

    constructor(private router: Router,
                private authenticationService: AuthentificationService) {
    }

    ngOnInit() {
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        if (this.role == 'trader') {
            this.router.navigate(['/dashboard']);
        } else {
            if (this.role == 'representant') {
                this.router.navigate(['/dashboardrepresentant']);
            }
            else {
                if (this.role == 'client') {
                    this.router.navigate(['/dashboardclient']);
                }

        }
        if(this.role == 'transporteur') {
            this.router.navigate(['/dashboardtransporteur']);
        }
    }
}
}