import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: { name: string, email: string} = {
    name: "",
    email: ""
  };

  submitForm(form : NgForm) : void {
    if(form.valid) {
      console.log(form.value);
      console.log(this.user);
    }
  }
}
