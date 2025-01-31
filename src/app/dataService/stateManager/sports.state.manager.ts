import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sport } from 'app/modules/admin/apps/sports/sports.types';

@Injectable({
    providedIn: 'root'
})
export class SportsStateManager {
    private _selectedSports: BehaviorSubject<Sport[]> = new BehaviorSubject<Sport[]>([]);

    /**
     * Get the selected sports as an observable
     */
    get selectedSports$(): Observable<Sport[]> {
        return this._selectedSports.asObservable();
    }

    /**
     * Get the selected sports as a value
     */
    get selectedSports(): Sport[] {
        return this._selectedSports.value;
    }

    /**
     * Set the selected sports
     *
     * @param sports
     */
    setSelectedSports(sports: Sport[]): void {
        this._selectedSports.next(sports);
    }

    /**
     * Add a sport to the selected sports
     *
     * @param sport
     */
    addSport(sport: Sport): void {
        const currentSports = this._selectedSports.value;
        if (!currentSports.find(s => s.id === sport.id)) {
            this._selectedSports.next([...currentSports, sport]);
        }
    }

    /**
     * Remove a sport from the selected sports
     *
     * @param sport
     */
    removeSport(sport: Sport): void {
        const currentSports = this._selectedSports.value;
        this._selectedSports.next(currentSports.filter(s => s.id !== sport.id));
    }
}
