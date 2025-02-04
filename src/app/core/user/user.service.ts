import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { User } from 'app/core/user/user.types';
import { environment } from 'environments/environment';
import { UserStateManager } from 'app/dataService/stateManager/user.state.manager';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userStateManager: UserStateManager
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    get user$(): Observable<User> {
        return this._user.asObservable();
    }
    set user(value: User) {
        // Store the value
        this._user.next(value);
        this._userStateManager.setUser(value); // Update the state manager
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    get(): Observable<User> {
        return this._httpClient.get<User>(`${environment.apiURL}user_app/user`).pipe(
            tap((user) => {
                this._user.next(user);
                this._userStateManager.setUser(user); // Update the state manager
            })
        );
    }

    /**
     * Update the user
     *
     * @param user
     */
    update(user: User): Observable<any> {
        return this._httpClient.patch<User>('api/common/user', { user }).pipe(
            map((response) => {
                this._user.next(response);
                this._userStateManager.setUser(response); // Update the state manager
            })
        );
    }
}
