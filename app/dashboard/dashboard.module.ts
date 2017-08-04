import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {ModalModule} from 'ng2-modal';
import {FormsModule} from '@angular/forms';
import {MODULE_COMPONENTS, MODULE_ROUTES} from './dashboard.routes';
import {AuthGuard} from '../authentification/authentification.guard';
import {AuthentificationService} from '../authentification/authentification.service';
import {RepresentantServices} from './representants/representants.service';
import {TransporteursServices} from "./transporteurs/transporteurs.service";
import {AjouterNoteDebitService} from './dashboardtransporteur/ajouternotedebit.service';
import {MarchandiseService} from './marchandises/marchandises.service';
import {TradingServices} from "./trading/trading.service";
import {DashboardclientServices} from "./dashboardclient/dashboardclient.service";

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
        AuthentificationService,
        RepresentantServices,
        MarchandiseService,
        TradingServices,
        DashboardclientServices,
        TransporteursServices,
        AjouterNoteDebitService,
    ],
    declarations: [MODULE_COMPONENTS],
    exports: [MODULE_COMPONENTS]
})

export class DashboardModule {
}
