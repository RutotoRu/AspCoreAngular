import { Component,OnInit,OnDestroy } from "@angular/core"

@Component({
    selector:"app-lifeloop",
    templateUrl:"./app.lifeloop1.html"
})
export class AppLifeloop1 implements OnInit,OnDestroy{
    name:string = "Tom";

    constructor(){
        this.log('constructor');
    }

    ngOnInit(){
        this.log("onInit");
    }

    ngOnDestroy(){
        this.log("onDestroy");
    }

    private log(msg:string){
        console.log(msg);
    }
}
