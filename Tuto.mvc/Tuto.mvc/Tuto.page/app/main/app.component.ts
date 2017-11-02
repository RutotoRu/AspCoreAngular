import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: './app.component.html',
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    name = "Roman";
    age: number = 19;

    clicks:number = 0;

    //Function that we send to be wake up in the child component
    ClickCounter(increased:boolean) {
        increased == true ? this.clicks++ : this.clicks--;
    }

    ParentChangeName(newName:string) {
        this.name = newName;
    }
}