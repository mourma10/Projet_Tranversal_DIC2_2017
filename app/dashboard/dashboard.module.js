"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var ng2_modal_1 = require('ng2-modal');
var forms_1 = require('@angular/forms');
var dashboard_routes_1 = require('./dashboard.routes');
var authentification_guard_1 = require('../authentification/authentification.guard');
var authentification_service_1 = require('../authentification/authentification.service');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES),
                ng2_modal_1.ModalModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule
            ],
            providers: [
                authentification_guard_1.AuthGuard,
                authentification_service_1.AuthentificationService
            ],
            declarations: [dashboard_routes_1.MODULE_COMPONENTS],
            exports: [dashboard_routes_1.MODULE_COMPONENTS]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map