import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthentificationService} from './authentification/authentification.service';
import {UserService} from './authentification/useraccount.service';
import {AuthGuard} from './authentification/authentification.guard';

import {DashboardModule} from './dashboard/dashboard.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        DashboardModule,
        RouterModule.forRoot([])
    ],
    declarations: [AppComponent, DashboardComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
        AuthentificationService,
        UserService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
