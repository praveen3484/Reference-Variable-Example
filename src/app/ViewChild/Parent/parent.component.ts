import { Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from "../child/child.component";


@Component({
  selector: 'parent-selector',
  templateUrl: './parent.component.html'
})
export class parentComponent
{
    @ViewChild(ViewChildComponent)
    private viewChildcomponent : ViewChildComponent;

    login(){
        this.viewChildcomponent.sayHello();
    }
    logout(){
        this.viewChildcomponent.sayBye();
    }
}