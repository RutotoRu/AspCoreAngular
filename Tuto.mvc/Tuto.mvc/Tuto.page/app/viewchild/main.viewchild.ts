import {Component,ViewChild} from "@angular/core"
import {ChildViewChild} from "./child.viewchild";

@Component({
    selector:"main-viewchild",
    templateUrl:"main.viewchild.html"
})
export class MainViewChild {

    @ViewChild(ChildViewChild)
    private counterComponent:ChildViewChild;

    increment(){
        this.counterComponent.increment();
    }

    decrement(){
        this.counterComponent.decrement();
    }

}