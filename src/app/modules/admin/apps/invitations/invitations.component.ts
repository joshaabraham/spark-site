import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'invitations',
    templateUrl    : './invitations.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvitationsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
