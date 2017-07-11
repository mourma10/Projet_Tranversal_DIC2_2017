import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ModalModule} from 'ng2-modal';
import {FormsModule} from '@angular/forms';
import {MODULE_COMPONENTS, MODULE_ROUTES} from './dashboard.routes';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        ModalModule,
        FormsModule
    ],
    declarations: [MODULE_COMPONENTS],
    exports: [MODULE_COMPONENTS]
})

export class DashboardModule {
}
