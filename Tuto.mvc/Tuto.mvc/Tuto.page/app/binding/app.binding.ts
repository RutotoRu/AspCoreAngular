import { Component } from "@angular/core";

@Component({
selector: "binding",
templateUrl: './app.binding.html',
})
export class BindingComponent {
    //binding 1 <p>{{name}}</p>
    name: string = "Roman";
    age: number = 24;
    //binding 2 [value]="name"

    //binding 3 (click)="increase()"

    count: number = 0;

    increase(): void {
        this.count++;
    }

    //binding 4 [(ngModel)]="name" 
    somevar: string = "someVar"
}