var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
var RelChildComponent2 = (function () {
    function RelChildComponent2() {
        this.LocalClickCounter = new EventEmitter();
    }
    RelChildComponent2.prototype.change = function (increased) {
        this.LocalClickCounter.emit(increased);
    };
    return RelChildComponent2;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], RelChildComponent2.prototype, "LocalClickCounter", void 0);
RelChildComponent2 = __decorate([
    Component({
        selector: "rel-child-comp2",
        templateUrl: "./child.relation2.html"
    })
], RelChildComponent2);
export { RelChildComponent2 };
//# sourceMappingURL=child.relarion2.js.map