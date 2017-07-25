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
        let self = this;
        this.authenticationService.login(this.username, this.password).subscribe(response => {
            console.log(self.authenticationService.user);
                if (self.authenticationService.user.roles[0] == 'ROLE_TRADER') {
                    self.router.navigate(['/dashboard']);
                } else {
                    if (self.authenticationService.user.roles[0] == 'ROLE_REPRESENTANT') {
                        self.router.navigate(['/dashboardrepresentant']);
                    } else {
                        if (self.authenticationService.user.roles[0] == 'ROLE_CLIENT') {
                            self.router.navigate(['/dashboardclient']);
                        } else {
                            if (self.authenticationService.user.roles[0] == 'ROLE_TRANSPORTEUR') {
                                self.router.navigate(['/dashboardtransporteur']);
                            }
                        }

                    }

                }
        });

    }
}
