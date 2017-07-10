import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './useraccount.component';

import {AuthentificationService} from './authentification.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: User;
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
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/dashboard']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}