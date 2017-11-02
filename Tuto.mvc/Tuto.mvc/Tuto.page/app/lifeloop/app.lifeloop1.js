var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
var AppLifeloop1 = (function () {
    function AppLifeloop1() {
        this.name = "Tom";
        this.log('constructor');
    }
    AppLifeloop1.prototype.ngOnInit = function () {
        this.log("onInit");
    };
    AppLifeloop1.prototype.ngOnDestroy = function () {
        this.log("onDestroy");
    };
    AppLifeloop1.prototype.log = function (msg) {
        console.log(msg);
    };
    return AppLifeloop1;
}());
AppLifeloop1 = __decorate([
    Component({
        selector: "app-lifeloop",
        templateUrl: "./app.lifeloop1.html"
    }),
    __metadata("design:paramtypes", [])
], AppLifeloop1);
export { AppLifeloop1 };
//# sourceMappingURL=app.lifeloop1.js.map