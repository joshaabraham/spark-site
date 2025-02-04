import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'app/core/user/user.types';

@Injectable({
    providedIn: 'root'
})
export class UserStateManager {
    private _user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

    /**
     * Get the current user as an observable
     */
    get user$(): Observable<User | null> {
        return this._user.asObservable();
    }

    /**
     * Get the current user as a value
     */
    get user(): User | null {
        return this._user.value;
    }

    /**
     * Set the current user
     *
     * @param user
     */
    setUser(user: User): void {
        this._user.next(user);
    }

    /**
     * Clear the current user
     */
    clearUser(): void {
        this._user.next(null);
    }
}
