import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team } from '../../modules/admin/apps/equipe/equipe.types';

@Injectable({
    providedIn: 'root'
})
export class EquipesStateManager {
    private _selectedTeams: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);

    /**
     * Get the selected teams as an observable
     */
    get selectedTeams$(): Observable<Team[]> {
        return this._selectedTeams.asObservable();
    }

    /**
     * Get the selected teams as a value
     */
    get selectedTeams(): Team[] {
        return this._selectedTeams.value;
    }

    /**
     * Set the selected teams
     *
     * @param teams
     */
    setSelectedTeams(teams: Team[]): void {
        this._selectedTeams.next(teams);
    }

    /**
     * Add a team to the selected teams
     *
     * @param team
     */
    addTeam(team: Team): void {
        const currentTeams = this._selectedTeams.value;
        if (!currentTeams.find(t => t.id === team.id)) {
            this._selectedTeams.next([...currentTeams, team]);
        }
    }

    /**
     * Remove a team from the selected teams
     *
     * @param team
     */
    removeTeam(team: Team): void {
        const currentTeams = this._selectedTeams.value;
        this._selectedTeams.next(currentTeams.filter(t => t.id !== team.id));
    }
}
