var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
var AppChildloop = (function () {
    function AppChildloop() {
        this.log("constructor");
    }
    AppChildloop.prototype.ngOnInit = function () {
        this.log("onInit");
    };
    AppChildloop.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chg = changes[propName];
            var cur = JSON.stringify(chg.currentValue);
            var prev = JSON.stringify(chg.previousValue);
            this.log(propName + ": currentValue = " + cur + "; previousValue = " + prev);
        }
    };
    AppChildloop.prototype.log = function (msg) {
        console.log("child:" + msg);
    };
    return AppChildloop;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], AppChildloop.prototype, "name", void 0);
AppChildloop = __decorate([
    Component({
        selector: 'app-child-loop',
        templateUrl: "./app.childloop.html"
    }),
    __metadata("design:paramtypes", [])
], AppChildloop);
export { AppChildloop };
//# sourceMappingURL=app.childloop.js.map