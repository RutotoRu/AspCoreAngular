import {Component} from "@angular/core"

@Component({
    selector:"child-templatevar",
    templateUrl:"./child.templatevar.html"
})
export class ChildTemplatevar{
    counter: number = 0;
    increment() {
        this.counter++;
    }
    decrement() {
        this.counter--;
    }
}