import { Component } from '@angular/core';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessagesService]
})
export class AppComponent {

  // Created an array of type string to store the messages which is returned from the service. 
  messages: string[] = [];

  // This is the dependency Injection where we create an instance of the Service through constructor and can use it in our component
  constructor(private ms: MessagesService) {
    this.messages = this.ms.getMessages();
  }
  
}
