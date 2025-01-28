import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BehaviorSubject, Observable } from 'rxjs';
import { EquipeService } from '../equipe.services';
import { Team, Sport, Sponsorship } from '../equipe.types';

@Component({
    selector: 'equipe-list',
    templateUrl: './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipeListComponent implements OnInit {
    teams$: Observable<Team[]>;
    sports$: Observable<Sport[]>;
    sponsorships$: Observable<Sponsorship[]>;
    filters = {
        sportId$: new BehaviorSubject<string | null>(null),
        city$: new BehaviorSubject<string | null>(null),
        championshipsWon$: new BehaviorSubject<number | null>(null),
        sponsorshipId$: new BehaviorSubject<string | null>(null),
        hideInactive$: new BehaviorSubject<boolean>(false)
    };

    /**
     * Constructor
     */
    constructor(private _equipeService: EquipeService) {}

    /**
     * OnInit lifecycle hook
     */
    ngOnInit(): void {
        this.teams$ = this._equipeService.getTeams();
       // this.sports$ = this._equipeService.getTeamsBySport();
       // this.sponsorships$ = this._equipeService.getSponsorships();
    }

    /**
     * Filter by sport
     *
     * @param change
     */
    filterBySport(change: MatSelectChange): void {
        this.filters.sportId$.next(change.value);
    }

    /**
     * Filter by city
     *
     * @param city
     */
    filterByCity(city: string): void {
        this.filters.city$.next(city);
    }

    /**
     * Filter by championships won
     *
     * @param championshipsWon
     */
    filterByChampionshipsWon(championshipsWon: number): void {
        this.filters.championshipsWon$.next(championshipsWon);
    }

    /**
     * Filter by sponsorship
     *
     * @param change
     */
    filterBySponsorship(change: MatSelectChange): void {
        this.filters.sponsorshipId$.next(change.value);
    }

    /**
     * Show/hide inactive teams
     *
     * @param change
     */
    toggleInactive(change: MatSlideToggleChange): void {
        this.filters.hideInactive$.next(change.checked);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
