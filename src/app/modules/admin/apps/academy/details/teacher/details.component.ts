import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { Teacher } from 'app/modules/admin/apps/academy/academy.types';

@Component({
    selector: 'app-teacher-details',
    templateUrl: './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherDetailsComponent implements OnInit {
    teacher: Teacher;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _academyService: AcademyService
    ) {}

    ngOnInit(): void {
        // Get the teacher ID from the route
        const id = this._activatedRoute.snapshot.paramMap.get('id');

        // Fetch the teacher details
        this._academyService.getTeacherById(Number(id)).subscribe((teacher: Teacher) => {
            this.teacher = teacher;
        });
    }
}
