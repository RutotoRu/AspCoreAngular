import {Component,ViewChild} from "@angular/core"

@Component({
    selector: "main-viewchild-second",
    templateUrl:"./main.viewchild.second.html"
})
export class MainViewChildSecond{

    @ViewChild("nameParagraph")
    nameParagraph: HTMLElement;


    name:string ="Tom";

    change(){
        console.log(this.nameParagraph.nativeElement.textContent);
        this.nameParagraph.nativeElement.textContent = "hell";
    }
}