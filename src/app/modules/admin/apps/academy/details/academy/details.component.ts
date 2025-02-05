import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { School } from 'app/modules/admin/apps/academy/academy.types';

@Component({
    selector: 'app-academy-details',
    templateUrl: './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademyDetailsComponent implements OnInit {
    school: School;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _academyService: AcademyService
    ) {}

    ngOnInit(): void {
        // Get the school ID from the route
        const id = this._activatedRoute.snapshot.paramMap.get('id');

        // Fetch the school details
        this._academyService.getSchoolById(Number(id)).subscribe((school: School) => {
            this.school = school;
        });
    }
}
