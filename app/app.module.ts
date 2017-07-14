import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {ModalModule} from 'ng2-modal';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthentificationService} from './authentification/authentification.service';
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
        ModalModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        DashboardModule,
        RouterModule.forRoot([])
    ],
    declarations: [AppComponent, DashboardComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
        AuthentificationService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
