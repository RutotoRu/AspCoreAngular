var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from "@angular/core";
var MainViewChildSecond = (function () {
    function MainViewChildSecond() {
        this.name = "Tom";
    }
    MainViewChildSecond.prototype.change = function () {
        console.log(this.nameParagraph.nativeElement.textContent);
        this.nameParagraph.nativeElement.textContent = "hell";
    };
    return MainViewChildSecond;
}());
__decorate([
    ViewChild("nameParagraph"),
    __metadata("design:type", HTMLElement)
], MainViewChildSecond.prototype, "nameParagraph", void 0);
MainViewChildSecond = __decorate([
    Component({
        selector: "main-viewchild-second",
        templateUrl: "./main.viewchild.second.html"
    })
], MainViewChildSecond);
export { MainViewChildSecond };
//# sourceMappingURL=main.viewchild.second.js.map