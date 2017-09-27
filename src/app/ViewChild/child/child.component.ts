import { Component } from '@angular/core';

@Component({
  selector: 'child-selector',
  templateUrl: './child.component.html'
})
export class ViewChildComponent
{   example:string;
    sayHello(){
        this.example = "Hello";
        alert("Good-afternoon!!!");
    }
     sayBye(){
        alert("See you later!!!");
    }
}