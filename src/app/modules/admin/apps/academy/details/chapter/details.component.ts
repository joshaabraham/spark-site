import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { Chapter } from 'app/modules/admin/apps/academy/academy.types';

@Component({
    selector: 'app-chapter-details',
    templateUrl: './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChapterDetailsComponent implements OnInit {
    chapter: Chapter;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _academyService: AcademyService
    ) {}

    ngOnInit(): void {
        // Get the chapter ID from the route
        const id = this._activatedRoute.snapshot.paramMap.get('id');

        // Fetch the chapter details
        this._academyService.getChapterById(Number(id)).subscribe((chapter: Chapter) => {
            this.chapter = chapter;
        });
    }
}
