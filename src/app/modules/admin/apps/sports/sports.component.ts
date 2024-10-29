import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'sports',
    templateUrl    : './sports.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
