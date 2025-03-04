import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-chat-dialog',
  templateUrl: './map-dialog.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapDialogComponent {


    constructor() {}

}
