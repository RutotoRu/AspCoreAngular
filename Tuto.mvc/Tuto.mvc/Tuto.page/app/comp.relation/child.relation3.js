var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
var RelChildComponent3 = (function () {
    function RelChildComponent3() {
        this.userNameChange = new EventEmitter();
    }
    RelChildComponent3.prototype.onNameChange = function (model) {
        this.userName = model;
        this.userNameChange.emit(model);
    };
    return RelChildComponent3;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], RelChildComponent3.prototype, "userName", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], RelChildComponent3.prototype, "userNameChange", void 0);
RelChildComponent3 = __decorate([
    Component({
        selector: "rel-child-comp3",
        templateUrl: "./child.relation3.html"
    })
], RelChildComponent3);
export { RelChildComponent3 };
//# sourceMappingURL=child.relation3.js.map