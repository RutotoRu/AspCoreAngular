import { Component } from "@angular/core"

@Component({
    selector:"child-viewchild",
    templateUrl: "child.viewchild.html"
})
export class ChildViewChild {
    counter:number=0;

    increment(){
        this.counter++;
    }

    decrement(){
        this.counter--;
    }
}