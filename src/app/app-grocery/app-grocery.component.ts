import { Component } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: [ 
   './app-grocery.component.css'
  ]
})
export class AppGroceryComponent {
  task!: string;
  tasks: any;

  onClick(){
    
    this.tasks.push({ name: this.task });
    this.task = '';
}



}
