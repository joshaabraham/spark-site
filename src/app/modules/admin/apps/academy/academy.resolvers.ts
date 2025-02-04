import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { School, Teacher, Student, Course, Section, Chapter } from 'app/modules/admin/apps/academy/academy.types';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';

@Injectable({
    providedIn: 'root'
})
export class AcademySchoolsResolver implements Resolve<School[]>
{
    constructor(private _academyService: AcademyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<School[]>
    {
        return this._academyService.getSchools().pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class AcademyTeachersResolver implements Resolve<Teacher[]>
{
    constructor(private _academyService: AcademyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Teacher[]>
    {
        return this._academyService.getTeachers().pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class AcademyStudentsResolver implements Resolve<Student[]>
{
    constructor(private _academyService: AcademyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Student[]>
    {
        return this._academyService.getStudents().pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class AcademyCoursesResolver implements Resolve<Course[]>
{
    constructor(private _academyService: AcademyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course[]>
    {
        return this._academyService.getCourses().pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class AcademyCourseResolver implements Resolve<Course>
{
    constructor(private _academyService: AcademyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course>
    {
        const courseId = route.paramMap.get('courseId');
        return this._academyService.getCourseById(Number(courseId)).pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class AcademySectionsResolver implements Resolve<Section[]>
{
    constructor(private _academyService: AcademyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Section[]>
    {
        const courseId = route.paramMap.get('courseId');
        return this._academyService.getSectionsByCourseId(Number(courseId)).pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class AcademySectionResolver implements Resolve<Section>
{
    constructor(private _academyService: AcademyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Section>
    {
        const sectionId = route.paramMap.get('sectionId');
        return this._academyService.getSectionById(Number(sectionId)).pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class AcademyChaptersResolver implements Resolve<Chapter[]>
{
    constructor(private _academyService: AcademyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chapter[]>
    {
        const sectionId = route.paramMap.get('sectionId');
        return this._academyService.getChaptersBySectionId(Number(sectionId)).pipe(
            catchError((error) => {
                console.error(error);
                return throwError(error);
            })
        );
    }
}
