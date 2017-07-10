"use strict";
var login_component_1 = require('../authentification/login.component');
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var icons_component_1 = require('./icons/icons.component');
var table_component_1 = require('./table/table.component');
var typography_component_1 = require('./typography/typography.component');
var authentification_guard_1 = require('../authentification/authentification.guard');
exports.MODULE_ROUTES = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: home_component_1.HomeComponent, canActivate: [authentification_guard_1.AuthGuard] },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: table_component_1.TableComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    /*{path: 'notifications', component: NotificationsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'upgrade', component: UpgradeComponent},*/
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    login_component_1.LoginComponent,
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    typography_component_1.TypographyComponent
];
//# sourceMappingURL=dashboard.routes.js.map