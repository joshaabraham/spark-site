import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { PlayerFormService } from './player-form.service';

@Component({
    selector     : 'player-form',
    templateUrl  : './playerform.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PlayerFormComponent implements OnInit {
    playerForm: UntypedFormGroup;

    constructor(private _playerFormService: PlayerFormService) { }

    ngOnInit(): void {
        this.playerForm = this._playerFormService.createPlayerForm();
    }

    resetForm(): void {
        this._playerFormService.resetForm(this.playerForm);
    }
}
