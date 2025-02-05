import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { Chapter } from 'app/modules/admin/apps/academy/academy.types';

@Component({
    selector: 'app-chapter-list',
    templateUrl: './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChapterListComponent implements OnInit {
    chapters: Chapter[];

    constructor(private _academyService: AcademyService) {}

    ngOnInit(): void {
        // Fetch the list of chapters
        this._academyService.getChapters().subscribe((chapters: Chapter[]) => {
            this.chapters = chapters;
        });
    }
}
