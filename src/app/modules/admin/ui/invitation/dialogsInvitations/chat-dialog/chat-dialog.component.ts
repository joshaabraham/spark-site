import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent {

  messages: string [] = [];
  newMessage: string = null;

  constructor() {}

  sendMessage(): void {
  throw new Error('Method not implemented.');
  }

}
