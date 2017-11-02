import { Component } from "@angular/core";

@Component({
selector: "child-1",
templateUrl: './app.childcomponent.html',
styleUrls:["./app.childcomponent.css"]
})
export class ChildComponent { 
    childname= "Child";
}