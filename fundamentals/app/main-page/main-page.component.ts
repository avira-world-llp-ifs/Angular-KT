import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  @Input() tabName = ""

  @Input() count = 0
  @Output() countValue = new EventEmitter<number>()

  countIncrement(){
    this.count++
    this.countValue.emit(this.count)
  }

  countDecrement(){
    this.count--;
    this.countValue.emit(this.count)
  }
}
