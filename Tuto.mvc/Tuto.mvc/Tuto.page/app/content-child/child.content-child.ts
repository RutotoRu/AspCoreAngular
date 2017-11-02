import {Component,ContentChild} from "@angular/core"

@Component({
    selector: "child-content-child",
    templateUrl:"./child.content-child.html"
})
export class ChildContentChild{
    @ContentChild("headerContent")
    header:HTMLElement;

    change(){
        console.log(this.header);
        this.header.nativeElement.textContent = "Hell to world!";
    }
}