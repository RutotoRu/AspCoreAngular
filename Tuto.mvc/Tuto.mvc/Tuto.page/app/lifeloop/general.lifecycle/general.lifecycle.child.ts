import {Component,
        Input,
        OnInit,
        DoCheck,
        OnChanges,
        AfterContentInit,
        AfterContentChecked,
        AfterViewChecked,
        AfterViewInit} from "@angular/core";

@Component({
    selector:"general-lifecycle-child",
    templateUrl:"./general.lifecycle.child.html"
})
export class GeneralLifecycleChild implements OnInit,DoCheck,OnChanges,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit{

    @Input() name:string;
    count:number = 1;

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
        console.log("child: "+this.count + ". " + msg);
        this.count++;
    }
}