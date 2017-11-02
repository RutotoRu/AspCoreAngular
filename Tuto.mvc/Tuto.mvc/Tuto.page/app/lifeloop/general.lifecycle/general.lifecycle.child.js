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
var GeneralLifecycleChild = (function () {
    function GeneralLifecycleChild() {
        this.count = 1;
    }
    GeneralLifecycleChild.prototype.ngOnInit = function () {
        this.log("ngOnInit");
    };
    GeneralLifecycleChild.prototype.ngOnChanges = function () {
        this.log("OnChanges");
    };
    GeneralLifecycleChild.prototype.ngDoCheck = function () {
        this.log("ngDoCheck");
    };
    GeneralLifecycleChild.prototype.ngAfterViewInit = function () {
        this.log("ngAfterViewInit");
    };
    GeneralLifecycleChild.prototype.ngAfterViewChecked = function () {
        this.log("ngAfterViewChecked");
    };
    GeneralLifecycleChild.prototype.ngAfterContentInit = function () {
        this.log("ngAfterContentInit");
    };
    GeneralLifecycleChild.prototype.ngAfterContentChecked = function () {
        this.log("ngAfterContentChecked");
    };
    GeneralLifecycleChild.prototype.log = function (msg) {
        console.log("child: " + this.count + ". " + msg);
        this.count++;
    };
    return GeneralLifecycleChild;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], GeneralLifecycleChild.prototype, "name", void 0);
GeneralLifecycleChild = __decorate([
    Component({
        selector: "general-lifecycle-child",
        templateUrl: "./general.lifecycle.child.html"
    })
], GeneralLifecycleChild);
export { GeneralLifecycleChild };
//# sourceMappingURL=general.lifecycle.child.js.map