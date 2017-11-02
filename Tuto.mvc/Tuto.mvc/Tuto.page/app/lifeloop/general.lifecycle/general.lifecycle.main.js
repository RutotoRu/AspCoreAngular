var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var GeneralLifecycleMain = (function () {
    function GeneralLifecycleMain() {
        this.name = "tom";
        this.parentCount = 0;
    }
    GeneralLifecycleMain.prototype.ngOnInit = function () {
        this.log("ngOnInit");
    };
    GeneralLifecycleMain.prototype.ngOnChanges = function () {
        this.log("OnChanges");
    };
    GeneralLifecycleMain.prototype.ngDoCheck = function () {
        this.log("ngDoCheck");
    };
    GeneralLifecycleMain.prototype.ngAfterViewInit = function () {
        this.log("ngAfterViewInit");
    };
    GeneralLifecycleMain.prototype.ngAfterViewChecked = function () {
        this.log("ngAfterViewChecked");
    };
    GeneralLifecycleMain.prototype.ngAfterContentInit = function () {
        this.log("ngAfterContentInit");
    };
    GeneralLifecycleMain.prototype.ngAfterContentChecked = function () {
        this.log("ngAfterContentChecked");
    };
    GeneralLifecycleMain.prototype.log = function (msg) {
        console.log("parent: " + this.parentCount + ". " + msg);
        this.parentCount++;
    };
    return GeneralLifecycleMain;
}());
GeneralLifecycleMain = __decorate([
    Component({
        selector: "general-lifecycle-main",
        templateUrl: "./general.lifecycle.main.html"
    })
], GeneralLifecycleMain);
export { GeneralLifecycleMain };
//# sourceMappingURL=general.lifecycle.main.js.map