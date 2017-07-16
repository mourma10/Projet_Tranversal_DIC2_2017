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
var TradingComponent = (function () {
    function TradingComponent(router) {
        this.router = router;
        this.marchandises = [];
        this.tradings = [];
    }
    TradingComponent.prototype.instruction = function () {
        this.router.navigate(['/icons']);
    };
    TradingComponent.prototype.addMarchandise = function () {
        var march = {
            libelleMarchandise: this.libelleMarchandise,
            quantite: this.quantite
        };
        this.marchandises.push(march);
        console.log(march.libelleMarchandise);
    };
    TradingComponent.prototype.ajouterTrading = function () {
        //Appel Fonction service
        var trading = {
            libelleTrading: this.libelleTrading,
            nomTransporteur: this.nomTransporteur,
            dateDebut: this.dateDebut,
            destination: this.destination,
            marchandises: this.marchandises
        };
        this.tradings.push(trading);
    };
    TradingComponent = __decorate([
        core_1.Component({
            selector: 'trading-cmp',
            moduleId: module.id,
            templateUrl: 'trading.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TradingComponent);
    return TradingComponent;
}());
exports.TradingComponent = TradingComponent;
//# sourceMappingURL=trading.component.js.map