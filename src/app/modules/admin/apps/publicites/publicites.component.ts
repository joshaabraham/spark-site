import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'publicites',
    templateUrl    : './publicites.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicitesComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
