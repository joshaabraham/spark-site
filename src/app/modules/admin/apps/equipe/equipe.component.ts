import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'equipe',
    templateUrl    : './equipe.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipeComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
