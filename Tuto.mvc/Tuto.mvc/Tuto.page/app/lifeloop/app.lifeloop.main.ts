import {Component, OnChanges, SimpleChanges} from "@angular/core"

@Component({
    selector:"app-lifeloop-main",
    templateUrl:"app.lifeloop.main.html"
})
export class AppLifeloopMain implements OnChanges{
    name:string = "Tom";
    age:number = 25;
    ngOnChanges(changes:SimpleChanges){
        for(let propName in changes){
            let chg = changes[propName];
            let cur = JSON.stringify(chg.currentValue);
            let prev = JSON.stringify(chg.previousValue);
            this.log(`${propName}: currentValue = ${cur}; previousValue = ${prev}`)
        }
    }


    private log(msg:string){
        console.log("parent:"+msg);
    }
}