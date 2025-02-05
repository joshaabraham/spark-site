import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { Teacher } from 'app/modules/admin/apps/academy/academy.types';

@Component({
    selector: 'app-teacher-list',
    templateUrl: './list.component.html',
     encapsulation  : ViewEncapsulation.None,
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherListComponent implements OnInit {
    teachers: Teacher[];

    constructor(private _academyService: AcademyService) {}

    ngOnInit(): void {
        // Fetch the list of teachers
        this._academyService.getTeachers().subscribe((teachers: Teacher[]) => {
            this.teachers = teachers;
        });
    }
}
