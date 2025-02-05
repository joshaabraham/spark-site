import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'player-list',
    templateUrl: './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersListComponent {
    filters = {
        categorySlug$: new BehaviorSubject<string | null>(null),
        hideInactive$: new BehaviorSubject<boolean>(false)
    };

    /**
     * Filter by category
     *
     * @param change
     */
    filterByCategory(change: MatSelectChange): void {
        this.filters.categorySlug$.next(change.value);
    }

    /**
     * Show/hide inactive players
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
