import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BehaviorSubject, combineLatest, Subject, takeUntil } from 'rxjs';
import { SportsService } from 'app/modules/admin/apps/sports/sports.service';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Sport } from '../sports.types';
import { SportsStateManager } from 'app/dataService/stateManager/sports.state.manager';

@Component({
    selector       : 'sports-list',
    templateUrl    : './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls      : ['./list.component.scss']
})
export class SportsListComponent implements OnInit, OnDestroy
{
    // categories: Category[];
    // courses: Course[];
    // filteredCourses: Course[];
    filters: {
        categorySlug$: BehaviorSubject<string>;
        query$: BehaviorSubject<string>;
        hideCompleted$: BehaviorSubject<boolean>;
    } = {
        categorySlug$ : new BehaviorSubject('all'),
        query$        : new BehaviorSubject(''),
        hideCompleted$: new BehaviorSubject(false)
    };

    sports$: Observable<Sport[]>;
    filteredSports$: Observable<Sport[]> = this._sportsStateManager.selectedSports$; // Liste des sports filtrés
    filterControl: FormControl = new FormControl();

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _sportsService: SportsService,
        private _sportsStateManager: SportsStateManager
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the sports
        this.sports$ = this._sportsService.getSports();

        // Filter the sports
        this.filteredSports$ = combineLatest([
            this.sports$,
            this.filterControl.valueChanges.pipe(startWith(''))
        ]).pipe(
            map(([sports, filterValue]) => this._filterSports(sports, filterValue))
        );
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter by search query
     *
     * @param query
     */
    filterByQuery(query: string): void
    {
        this.filters.query$.next(query);
    }

    /**
     * Filter by category
     *
     * @param change
     */
    filterByCategory(change: MatSelectChange): void
    {
        this.filters.categorySlug$.next(change.value);
    }

    /**
     * Show/hide completed courses
     *
     * @param change
     */
    toggleCompleted(change: MatSlideToggleChange): void
    {
        this.filters.hideCompleted$.next(change.checked);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    /**
     * Add sport to selected sports
     *
     * @param sport
     */
    addSportToSelection(sport: Sport): void {
        this._sportsStateManager.addSport(sport);
    }

    /**
     * Remove sport from selected sports
     *
     * @param sport
     */
    removeSportFromSelection(sport: Sport): void {
        this._sportsStateManager.removeSport(sport);
    }

    /**
     * Check if sport is selected
     *
     * @param sport
     */
    isSportSelected(sport: Sport): boolean {
        return this._sportsStateManager.selectedSports.some(selectedSport => selectedSport.id === sport.id);
    }

    /**
     * Filter sports
     *
     * @param sports
     * @param filterValue
     * @private
     */
    private _filterSports(sports: Sport[], filterValue: string): Sport[] {
        if (!filterValue) {
            return sports;
        }

        const lowerCaseFilter = filterValue.toLowerCase();

        return sports.filter(sport =>
            Object.values(sport).some(value =>
                value.toString().toLowerCase().includes(lowerCaseFilter)
            )
        );
    }

}
