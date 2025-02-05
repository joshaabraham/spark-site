import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { Course } from 'app/modules/admin/apps/academy/academy.types';

@Component({
    selector: 'app-course-list',
    templateUrl: './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit {
    courses: Course[];

    constructor(private _academyService: AcademyService) {}

    ngOnInit(): void {
        // Fetch the list of courses
        this._academyService.getCourses().subscribe((courses: Course[]) => {
            this.courses = courses;
        });
    }
}
