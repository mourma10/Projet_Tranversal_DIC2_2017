import {Route} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {LoginComponent} from '../authentification/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {IconsComponent} from './icons/icons.component';
import {TableComponent} from './table/table.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {TypographyComponent} from './typography/typography.component';
import {MapsComponent} from './maps/maps.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {TransporteursComponent} from './transporteurs/transporteurs.component';
import {TradingComponent} from './trading/trading.component';
import {RepresentantsComponent} from './representants/representants.component';

import {AuthGuard} from '../authentification/authentification.guard';

export const MODULE_ROUTES: Route[] = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
    {path: 'table', component: TableComponent, canActivate: [AuthGuard]},
    {path: 'icons', component: IconsComponent, canActivate: [AuthGuard]},
    {path: 'typography', component: TypographyComponent, canActivate: [AuthGuard]},
    {path: 'transporteurs', component: TransporteursComponent, canActivate: [AuthGuard]},
    {path: 'representants', component: RepresentantsComponent},
    {path: 'trading', component: TradingComponent, canActivate: [AuthGuard]},
    /*{path: 'notifications', component: NotificationsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'upgrade', component: UpgradeComponent},*/
    {path: '', redirectTo: 'login', pathMatch: 'full'}
];

export const MODULE_COMPONENTS = [
    LoginComponent,
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    TypographyComponent,
    TradingComponent,
    TransporteursComponent,
    RepresentantsComponent,
    /*NotificationsComponent,
    MapsComponent,
    UpgradeComponent,*/
];
