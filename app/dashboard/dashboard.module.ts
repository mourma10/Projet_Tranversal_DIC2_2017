import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {ModalModule} from 'ng2-modal';
import {FormsModule} from '@angular/forms';
import {MODULE_COMPONENTS, MODULE_ROUTES} from './dashboard.routes';
import {AuthGuard} from '../authentification/authentification.guard';
import {AuthentificationService} from '../authentification/authentification.service';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        ModalModule,
        FormsModule,
        BrowserModule,
        HttpModule
    ],
    providers: [
        AuthGuard,
        AuthentificationService
    ],
    declarations: [MODULE_COMPONENTS],
    exports: [MODULE_COMPONENTS]
})

export class DashboardModule {
}
