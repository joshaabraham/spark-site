import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Category, Course } from 'app/modules/admin/apps/invitations/invitations.types';
import { InvitationsService } from 'app/modules/admin/apps/invitations/invitations.service';

@Injectable({
    providedIn: 'root'
})
export class InvitationsCategoriesResolver implements Resolve<any>
{
      /**
     * Constructor
     */
      constructor(private _invitationsService: InvitationsService)
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
          return this._invitationsService.getCategories();
      }
  }
  
  @Injectable({
      providedIn: 'root'
  })
  export class InvitationsCoursesResolver implements Resolve<any>
  {
      /**
       * Constructor
       */
      constructor(private _invitationsService: InvitationsService)
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
          return this._invitationsService.getCourses();
      }
  }
  
  @Injectable({
      providedIn: 'root'
  })
  export class InvitationsCourseResolver implements Resolve<any>
  {
      /**
       * Constructor
       */
      constructor(
          private _router: Router,
          private _invitationsService: InvitationsService
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
          return this._invitationsService.getCourseById(route.paramMap.get('id'))
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
  