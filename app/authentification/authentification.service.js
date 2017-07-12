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
var http_1 = require('@angular/http');
var rxjs_1 = require('rxjs');
require('rxjs/add/operator/map');
var AuthentificationService = (function () {
    function AuthentificationService(http) {
        this.http = http;
    }
    AuthentificationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8000/api/tokens', null, options)
            .map(function (response) {
            console.log(response.json());
            var token = response.json() && response.json().token;
            if (token) {
                _this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                return true;
            }
            else {
                return false;
            }
        }).catch(function (error) {
            console.log(error);
            return rxjs_1.Observable.throw(error.json().error || 'Server error');
        });
    };
    AuthentificationService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthentificationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthentificationService);
    return AuthentificationService;
}());
exports.AuthentificationService = AuthentificationService;
//# sourceMappingURL=authentification.service.js.map