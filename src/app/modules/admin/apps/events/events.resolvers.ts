import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Category, Course } from 'app/modules/admin/apps/events/events.types';
import { EventsService } from 'app/modules/admin/apps/events/events.service';

@Injectable({
    providedIn: 'root'
})
export class EventsCategoriesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _eventsService: EventsService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]>
    {
        return this._eventsService.getCategories();
    }
}

@Injectable({
    providedIn: 'root'
})
export class EventsCoursesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _eventsService: EventsService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course[]>
    {
        return this._eventsService.getCourses();
    }
}

@Injectable({
    providedIn: 'root'
})
export class EventsCourseResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private _eventsService: EventsService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course>
    {
        return this._eventsService.getCourseById(route.paramMap.get('id'))
                   .pipe(
                       // Error here means the requested task is not available
                       catchError((error) => {

                           // Log the error
                           console.error(error);

                           // Get the parent url
                           const parentUrl = state.url.split('/').slice(0, -1).join('/');

                           // Navigate to there
                           this._router.navigateByUrl(parentUrl);

                           // Throw an error
                           return throwError(error);
                       })
                   );
    }
}
