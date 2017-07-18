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
        this.authenticationService.login(this.username, this.password).subscribe(response => {
            if (response === true) {
                if (this.authenticationService.role == 'trader') {
                    this.router.navigate(['/dashboard']);
                } else {
                    if (this.authenticationService.role == 'representant') {
                        this.router.navigate(['/dashboardrepresentant']);
                    } else {
                        if (this.authenticationService.role == 'client') {
                            this.router.navigate(['/dashboardclient']);
                        } else {
                            if (this.authenticationService.role == 'transporteur') {
                                this.router.navigate(['/dashboardtransporteur']);
                            }
                        }

                    }

                }
            } else {
                this.router.navigate(['/login']);
            }
        });

    }
}
