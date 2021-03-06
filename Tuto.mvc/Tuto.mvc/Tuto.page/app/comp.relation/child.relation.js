var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Component } from "@angular/core";
var RelChildComponent = (function () {
    function RelChildComponent() {
    }
    Object.defineProperty(RelChildComponent.prototype, "userAge1", {
        get: function () {
            return this._userAge;
        },
        set: function (age) {
            if (age === 0)
                this._userAge = 0;
            else if (age > 100)
                this._userAge = 100;
            else
                this._userAge = age;
        },
        enumerable: true,
        configurable: true
    });
    return RelChildComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], RelChildComponent.prototype, "userName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], RelChildComponent.prototype, "userAge1", null);
RelChildComponent = __decorate([
    Component({
        selector: "rel-child-comp",
        templateUrl: "./child.relation.html"
    })
], RelChildComponent);
export { RelChildComponent };
//# sourceMappingURL=child.relation.js.map