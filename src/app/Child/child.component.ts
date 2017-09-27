import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html'
})

export class childComponent
{
    login(){
        alert("Logged-In");
    }
     logout(){
        alert("Logged-Out");
    }
}