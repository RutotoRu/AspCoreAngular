import {Component,Input,OnInit,OnChanges,SimpleChanges} from "@angular/core"

@Component({
    selector:'app-child-loop',
    templateUrl:"./app.childloop.html"
})
export class AppChildloop implements OnInit,OnChanges{
    @Input() name:string;

    constructor(){
        this.log(`constructor`);
    }

    ngOnInit(){
        this.log(`onInit`);
    }

    ngOnChanges(changes:SimpleChanges){
        for(let propName in changes){
            let chg = changes[propName];
            let cur = JSON.stringify(chg.currentValue);
            let prev = JSON.stringify(chg.previousValue);
            this.log(`${propName}: currentValue = ${cur}; previousValue = ${prev}`);
        }
    }

    private log(msg:string){
        console.log("child:"+msg);
    }
}