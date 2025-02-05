import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { School } from 'app/modules/admin/apps/academy/academy.types';

@Component({
    selector: 'app-academy-list',
    templateUrl: './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademyListComponent implements OnInit {
    schools: School[];

    constructor(private _academyService: AcademyService) {}

    ngOnInit(): void {
        // Fetch the list of schools
        this._academyService.getSchools().subscribe((schools: School[]) => {
            this.schools = schools;
        });
    }
}
