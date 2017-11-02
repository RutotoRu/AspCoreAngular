import { Input, Component} from "@angular/core";

@Component({
selector: "rel-child-comp",
templateUrl: "./child.relation.html"
})

export class RelChildComponent{
    @Input() userName: string;
    
    // this is private variable
    _userAge:number;

    //this is public variable so you pass the data form parent controller into userAge function;
    @Input()
    set userAge1(age: number) {
        if (age === 0)
            this._userAge = 0;
        else if (age > 100)
            this._userAge = 100;
        else
            this._userAge = age;
    }
    get userAge1(){
        return this._userAge;
    }
}