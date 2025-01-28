import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SportsService } from '../sports.service';
import { Sport } from '../sports.types';

@Component({
    selector: 'sports-details',
    templateUrl: './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportsDetailsComponent implements OnInit, OnDestroy {
    sport: Sport;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _route: ActivatedRoute,
        private _sportsService: SportsService,
        private _changeDetectorRef: ChangeDetectorRef
    ) {}

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the sport ID from the route
        const sportId = Number(this._route.snapshot.paramMap.get('id'));

        // Get the sport details
        this._sportsService.getSportById(sportId)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((sport: Sport) => {
                this.sport = sport;
                this._changeDetectorRef.markForCheck();
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
}
