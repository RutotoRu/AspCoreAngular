var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BindingComponent } from "./binding/app.binding";
import { AppComponent } from "./main/app.component";
import { ChildComponent } from "./childcomponent/app.childcomponent";
import { RelChildComponent } from "./comp.relation/child.relation";
import { RelChildComponent2 } from "./comp.relation/child.relarion2";
import { RelChildComponent3 } from "./comp.relation/child.relation3";
import { AppLifeloop1 } from "./lifeloop/app.lifeloop1";
import { AppLifeloopMain } from "./lifeloop/app.lifeloop.main";
import { AppChildloop } from "./lifeloop/childloop/app.childloop";
import { GeneralLifecycleMain } from "./lifeloop/general.lifecycle/general.lifecycle.main";
import { GeneralLifecycleChild } from "./lifeloop/general.lifecycle/general.lifecycle.child";
import { MainTemplatevar } from "./templatevars/main.templatevar";
import { ChildTemplatevar } from "./templatevars/child.templatevar";
import { ChildViewChild } from "./viewchild/child.viewchild";
import { MainViewChild } from "./viewchild/main.viewchild";
import { MainViewChildSecond } from "./viewchild/main.viewchild.second";
import { ChildContentChild } from "./content-child/child.content-child";
import { MainContentChild } from "./content-child/main.content-child";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule, FormsModule],
        declarations: [AppComponent, BindingComponent, ChildComponent, RelChildComponent, RelChildComponent2,
            RelChildComponent3,
            AppLifeloop1,
            AppLifeloopMain,
            AppChildloop,
            GeneralLifecycleChild,
            GeneralLifecycleMain,
            ChildTemplatevar,
            MainTemplatevar,
            ChildViewChild,
            MainViewChild,
            MainViewChildSecond,
            ChildContentChild,
            MainContentChild
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map