import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { Section } from 'app/modules/admin/apps/academy/academy.types';

@Component({
    selector: 'app-section-list',
    templateUrl: './list.component.html',
     encapsulation  : ViewEncapsulation.None,
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionListComponent implements OnInit {
    sections: Section[];

    constructor(private _academyService: AcademyService) {}

    ngOnInit(): void {
        // Fetch the list of sections
        this._academyService.getSections().subscribe((sections: Section[]) => {
            this.sections = sections;
        });
    }
}
