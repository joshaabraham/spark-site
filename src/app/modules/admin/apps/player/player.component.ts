import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'player',
    templateUrl    : './player.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
