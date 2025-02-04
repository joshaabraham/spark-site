import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'app/core/user/user.types';

@Injectable({
    providedIn: 'root'
})
export class UserStateManager {
    private _user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
    private _coordinates: BehaviorSubject<{ latitude: number; longitude: number } | null> = new BehaviorSubject<{ latitude: number; longitude: number } | null>(null);

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
     * Get the current coordinates as an observable
     */
    get coordinates$(): Observable<{ latitude: number; longitude: number } | null> {
        return this._coordinates.asObservable();
    }

    /**
     * Get the current coordinates as a value
     */
    get coordinates(): { latitude: number; longitude: number } | null {
        return this._coordinates.value;
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


    /**
     * Set the current coordinates
     *
     * @param coordinates
     */
    setCoordinates(coordinates: { latitude: number; longitude: number }): void {
        this._coordinates.next(coordinates);
    }

    /**
     * Clear the current coordinates
     */
    clearCoordinates(): void {
        this._coordinates.next(null);
    }
}
