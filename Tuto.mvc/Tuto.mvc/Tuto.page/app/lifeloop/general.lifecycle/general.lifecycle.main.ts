import {Component,
    Input,
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit
} from "@angular/core"

@Component({
    selector:"general-lifecycle-main",
    templateUrl:"./general.lifecycle.main.html"
})
export class GeneralLifecycleMain{
    name:string = "tom";

    parentCount: number = 0;

    ngOnInit(){
        this.log(`ngOnInit`);
    }

    ngOnChanges(){
        this.log(`OnChanges`);
    }

    ngDoCheck(){
        this.log(`ngDoCheck`);
    }

    ngAfterViewInit(){
        this.log(`ngAfterViewInit`);
    }

    ngAfterViewChecked(){
        this.log(`ngAfterViewChecked`);
    }

    ngAfterContentInit(){
        this.log(`ngAfterContentInit`);
    }

    ngAfterContentChecked(){
        this.log(`ngAfterContentChecked`)
    }


    private log(msg:string){
        console.log("parent: "+this.parentCount + ". " + msg);
        this.parentCount++;
    }
}