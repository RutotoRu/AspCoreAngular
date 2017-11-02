var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var AppLifeloopMain = (function () {
    function AppLifeloopMain() {
        this.name = "Tom";
        this.age = 25;
    }
    AppLifeloopMain.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chg = changes[propName];
            var cur = JSON.stringify(chg.currentValue);
            var prev = JSON.stringify(chg.previousValue);
            this.log(propName + ": currentValue = " + cur + "; previousValue = " + prev);
        }
    };
    AppLifeloopMain.prototype.log = function (msg) {
        console.log("parent:" + msg);
    };
    return AppLifeloopMain;
}());
AppLifeloopMain = __decorate([
    Component({
        selector: "app-lifeloop-main",
        templateUrl: "app.lifeloop.main.html"
    })
], AppLifeloopMain);
export { AppLifeloopMain };
//# sourceMappingURL=app.lifeloop.main.js.map