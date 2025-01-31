import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject, takeUntil } from 'rxjs';
import { EventsService } from 'app/modules/admin/apps/events/events.service';
import { FuseCardComponent } from '@fuse/components/card';
import { SportEvent } from '../events.types';
import { SportsStateManager } from 'app/dataService/stateManager/sports.state.manager';
import { EquipesStateManager } from 'app/dataService/stateManager/equipes.state.manager';
import { Sport } from 'app/modules/admin/apps/sports/sports.types';
import { Team } from '../../equipe/equipe.types';

@Component({
    selector: 'events-list',
    templateUrl: './list.component.html',
    styles: [
        `
            cards fuse-card {
                margin: 16px;
            }
        `
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsListComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChildren(FuseCardComponent, { read: ElementRef }) private _fuseCards: QueryList<ElementRef>;

    events$: BehaviorSubject<SportEvent[]> = new BehaviorSubject<SportEvent[]>([]);
    filteredEvents$: BehaviorSubject<SportEvent[]> = new BehaviorSubject<SportEvent[]>([]);
    sports$: BehaviorSubject<Sport[]> = new BehaviorSubject<Sport[]>([]);
    teams$: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);
    filters = {
        date: new BehaviorSubject<Date>(new Date()),
        endDate: new BehaviorSubject<Date | null>(null),
        sports: new BehaviorSubject<string[]>([]),
        teams: new BehaviorSubject<Team[]>([]),
        name: new BehaviorSubject<string>('')
    };
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _eventsService: EventsService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _sportsStateManager: SportsStateManager,
        private _equipesStateManager: EquipesStateManager
    ) {}

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the events
        this._eventsService.getEvents()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((events: SportEvent[]) => {
                this.events$.next(events);
                this._filterEvents();
            });

        // Get the selected sports from the state manager
        this._sportsStateManager.selectedSports$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((sports: Sport[]) => {
                this.sports$.next(sports);
                this.filters.sports.next(sports.map(sport => sport.code));
                this._filterEvents();
            });

        // Get the selected teams from the state manager
        this._equipesStateManager.selectedTeams$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((teams: Team[]) => {
                this.teams$.next(teams);
                this.filters.teams.next(teams.map(team => team));
                this._filterEvents();
            });

        // Combine filters and apply them
        combineLatest([
            this.filters.date,
            this.filters.endDate,
            this.filters.sports,
            this.filters.teams,
            this.filters.name
        ])
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(() => {
            this._filterEvents();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        // Do something after view init
    }

    /**
     * On date change
     *
     * @param date
     */
    onDateChange(date: Date): void {
        this.filters.date.next(date);
    }

    /**
     * On end date change
     *
     * @param endDate
     */
    onEndDateChange(endDate: Date): void {
        this.filters.endDate.next(endDate);
    }

    /**
     * On sports change
     *
     * @param sports
     */
    onSportsChange(sports: string[]): void {
        this.filters.sports.next(sports);
    }

    /**
     * On teams change
     *
     * @param teams
     */
    onTeamsChange(teams: Team[]): void {
        this.filters.teams.next(teams);
    }

    /**
     * On name change
     *
     * @param name
     */
    onNameChange(name: string): void {
        this.filters.name.next(name);
    }

    /**
     * Filter events
     */
    private _filterEvents(): void {
        let filteredEvents = this.events$.value;

        // Filter by date
        const date = this.filters.date.value;
        filteredEvents = filteredEvents.filter((event: SportEvent) => new Date(event.startDate).toDateString() === date.toDateString());

        // Filter by end date
        const endDate = this.filters.endDate.value;
        if (endDate) {
            filteredEvents = filteredEvents.filter((event: SportEvent) => new Date(event.endDate) <= endDate);
        }

        // Filter by sports
        const sports = this.filters.sports.value;
        if (sports.length > 0) {
            filteredEvents = filteredEvents.filter((event: SportEvent) => sports.includes(event.sport.code));
        }

        // Filter by teams
        const teams = this.filters.teams.value;
        if (teams.length > 0) {
            filteredEvents = filteredEvents.filter((event: SportEvent) => teams.some(team => event.participatingTeams.includes(team)));
        }

        // Filter by name
        const name = this.filters.name.value.toLowerCase();
        if (name) {
            filteredEvents = filteredEvents.filter((event: SportEvent) => event.name.toLowerCase().includes(name));
        }

        // Update the filtered events
        this.filteredEvents$.next(filteredEvents);
        this._changeDetectorRef.markForCheck();
    }
}
