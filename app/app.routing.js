"use strict";
var auth_component_1 = require('./authentification/auth.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var appRoutes = [
    { path: 'login', component: auth_component_1.LoginComponent },
    { path: '', component: dashboard_component_1.DashboardComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
//export const routing = RouterModule.forRoot(appRoutes); 
//# sourceMappingURL=app.routing.js.map