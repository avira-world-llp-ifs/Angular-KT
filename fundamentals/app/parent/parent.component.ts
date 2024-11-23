import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name = "Khushboo"

  className = ""

  getStudentClass(value:string){
    this.className = value;
  }
}
