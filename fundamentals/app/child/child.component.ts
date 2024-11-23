import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() studentName = ""  
  
  @Output() studetnClass = new EventEmitter<string>();

  addClassName(){
    this.studetnClass.emit("Class 5")
  }
}
