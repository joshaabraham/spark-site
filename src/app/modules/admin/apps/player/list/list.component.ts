import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../players.types';
import { PlayersStateManager } from 'app/dataService/stateManager/players.state.manager';


@Component({
    selector: 'player-list',
    templateUrl: './list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersListComponent implements OnInit {
    players$: Observable<Player[]>; // Observable pour les joueurs
    filters = {
        categorySlug$: new BehaviorSubject<string | null>(null),
        hideInactive$: new BehaviorSubject<boolean>(false)
    };

    constructor(private _playersStateManager: PlayersStateManager) {}

    ngOnInit(): void {
        // Récupère les joueurs depuis le PlayersStateManager
        this.players$ = this._playersStateManager.players$;
    }

    /**
     * Filter by category
     *
     * @param change
     */
    filterByCategory(change: any): void {
        this.filters.categorySlug$.next(change.value);
    }

    /**
     * Show/hide inactive players
     *
     * @param change
     */
    toggleInactive(change: any): void {
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
