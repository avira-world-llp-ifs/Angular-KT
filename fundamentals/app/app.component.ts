import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  studentDetail:student = {
    name : "Shreyash",
    age : 25,
    phoneNumber: 99876778008,
    isMale: true,
    isFemale: false,
  }

  constructor(private _xyz :abc){
    
    _xyz.countIncrement();

    abc.PrintHello();
    console.log(this.studentDetail)

  }
  title = 'fundamentals';

  
  no:number = 1


  name(params:string) {
    
  }
  nameAllow = () => {

  }
  
}

interface student {
  name : string,
  age : number,
  phoneNumber : number,
  isMale:boolean,
  isFemale:boolean
}


@Injectable({
  providedIn: 'root'
})
class abc{

  constructor(){
    console.log("inside ABC")
  }
  private static count = 1;

  static PrintHello(){
    console.log(abc.count)
    console.log("Hello, we are working")
  }

  static callPrintHello(){
    this.PrintHello()
  }

  countIncrement(){
    abc.count += 1
    console.log(abc.count)
  }

  countDecrement(){
    abc.count -= 1
    console.log(abc.count)
  }
}