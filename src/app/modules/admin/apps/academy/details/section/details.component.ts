import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { Section } from 'app/modules/admin/apps/academy/academy.types';

@Component({
    selector: 'app-section-details',
    templateUrl: './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionDetailsComponent implements OnInit {
    section: Section;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _academyService: AcademyService
    ) {}

    ngOnInit(): void {
        // Get the section ID from the route
        const id = this._activatedRoute.snapshot.paramMap.get('id');

        // Fetch the section details
        this._academyService.getSectionById(Number(id)).subscribe((section: Section) => {
            this.section = section;
        });
    }
}
