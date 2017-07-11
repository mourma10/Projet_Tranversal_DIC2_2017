import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { ModalModule } from 'ng2-modal';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        ModalModule,
    ],
    declarations: [ MODULE_COMPONENTS ],
    exports: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
