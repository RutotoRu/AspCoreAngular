var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChild } from "@angular/core";
var ChildContentChild = (function () {
    function ChildContentChild() {
    }
    ChildContentChild.prototype.change = function () {
        console.log(this.header);
        this.header.nativeElement.textContent = "Hell to world!";
    };
    return ChildContentChild;
}());
__decorate([
    ContentChild("headerContent"),
    __metadata("design:type", HTMLElement)
], ChildContentChild.prototype, "header", void 0);
ChildContentChild = __decorate([
    Component({
        selector: "child-content-child",
        templateUrl: "./child.content-child.html"
    })
], ChildContentChild);
export { ChildContentChild };
//# sourceMappingURL=child.content-child.js.map