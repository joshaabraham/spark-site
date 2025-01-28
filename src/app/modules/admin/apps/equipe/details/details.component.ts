import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EquipeService } from '../equipe.services';
import { Team } from '../equipe.types';

@Component({
    selector: 'equipe-details',
    templateUrl: './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipeDetailsComponent implements OnInit {
    team$: Observable<Team>;

    /**
     * Constructor
     */
    constructor(
        private _route: ActivatedRoute,
        private _equipeService: EquipeService
    ) {}

    /**
     * OnInit lifecycle hook
     */
    ngOnInit(): void {
        const teamId = this._route.snapshot.paramMap.get('id');
        this.team$ = this._equipeService.getTeamById(teamId);
    }
}