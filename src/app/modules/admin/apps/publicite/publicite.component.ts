import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'publicite',
    templateUrl    : './publicite.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PubliciteComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
