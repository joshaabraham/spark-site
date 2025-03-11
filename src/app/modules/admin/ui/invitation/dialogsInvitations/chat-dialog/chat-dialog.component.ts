import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatDialogComponent {

  messages: string [] = [];
  newMessage: string = null;

  constructor() {}

  sendMessage(): void {
  throw new Error('Method not implemented.');
  }

}
