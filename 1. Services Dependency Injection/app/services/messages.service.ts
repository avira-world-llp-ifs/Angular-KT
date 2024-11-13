import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  getMessages() {
    return [ 'messaeg1', 'message2', 'message3'];
  }
}
