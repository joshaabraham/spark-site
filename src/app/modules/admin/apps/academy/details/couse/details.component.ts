import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { Course } from 'app/modules/admin/apps/academy/academy.types';

@Component({
    selector: 'app-course-details',
    templateUrl: './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailsComponent implements OnInit {
    course: Course;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _academyService: AcademyService
    ) {}

    ngOnInit(): void {
        // Get the course ID from the route
        const id = this._activatedRoute.snapshot.paramMap.get('id');

        // Fetch the course details
        this._academyService.getCourseById(Number(id)).subscribe((course: Course) => {
            this.course = course;
        });
    }
}
