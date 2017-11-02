import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: "rel-child-comp3",
    templateUrl: "./child.relation3.html"
})

export class RelChildComponent3{

   @Input() userName:string;

   @Output() userNameChange = new EventEmitter<string>();

   onNameChange(model:string) {
       //here we set new local userName by changing it in child component
       this.userName = model;
       //here we wake up parent function that was bind to userNameChange function
       this.userNameChange.emit(model)
   }
}