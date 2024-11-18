import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'data-binding'; 
  myBtn: string = 'myButton';
  counter: number = 0;

  //attribute Binding
  isDisabled: boolean = true;
  angularImage: string = "../assets/angualr.jpg";

  //style binding
  bgColor: string ='green';
  titleColor: string = 'white';
  description: string = 'font-size: 50px; color: red;';

  //class binding
  redText: string = 'yes';
  redTexts: string = "red";

  // Two way data binding
  inputText: string = 'Initial value';

  //ngClass
  message: string = 'This is a dangerous message';
  classes: string = 'danger text-size'

  incrementCounter() {
    this.counter++;
  }


  isloggedin: boolean = true;
  names: string[] = ['subham', 'ashish', 'khusboo', 'ujwal', 'rudransh'];
  grade: string = 'C';
}
