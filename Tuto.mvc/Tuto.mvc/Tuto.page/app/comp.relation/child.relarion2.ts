import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: "rel-child-comp2",
    templateUrl: "./child.relation2.html"
})

export class RelChildComponent2{

    //In this part I'm create a function that would be seen from the parent component;
    //Through this function parent component will send its own function so that it can be awaked want local
    //function would be triggered on the UI;
    @Output() LocalClickCounter = new EventEmitter<boolean>();

    //this is our local function (available only in child component)
    change(increased:boolean) {
        this.LocalClickCounter.emit(
            increased
        );
    }

}