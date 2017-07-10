"use strict";
var login_component_1 = require('../authentification/login.component');
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var icons_component_1 = require('./icons/icons.component');
var table_component_1 = require('./table/table.component');
var typography_component_1 = require('./typography/typography.component');
var transporteurs_component_1 = require('./transporteurs/transporteurs.component');
var representants_component_1 = require('./representants/representants.component');
exports.MODULE_ROUTES = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: table_component_1.TableComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    { path: 'transporteurs', component: transporteurs_component_1.TransporteursComponent },
    { path: 'representants', component: representants_component_1.RepresentantsComponent },
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
    typography_component_1.TypographyComponent,
    transporteurs_component_1.TransporteursComponent,
    representants_component_1.RepresentantsComponent
];
//# sourceMappingURL=dashboard.routes.js.map