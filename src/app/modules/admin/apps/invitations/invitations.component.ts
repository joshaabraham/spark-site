import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invitation } from './invitations.types';

@Component({
    selector: 'app-invitations',
    templateUrl: './invitations.component.html',
      encapsulation  : ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvitationsComponent implements OnInit {


    constructor() {}

    ngOnInit(): void {

    }
}
