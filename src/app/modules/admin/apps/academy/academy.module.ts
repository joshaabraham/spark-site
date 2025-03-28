import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { SharedModule } from 'app/shared/shared.module';
import { academyRoutes } from 'app/modules/admin/apps/academy/academy.routing';
import { AcademyComponent } from 'app/modules/admin/apps/academy/academy.component';
import { AcademyListComponent } from 'app/modules/admin/apps/academy/list/list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TeacherListComponent } from './list/teacher/list.component';
import { SectionListComponent } from './list/section/list.component';
import { CourseListComponent } from './list/course/list.component';
import { ChapterListComponent } from './list/chapter/list.component';
import { FormsComponent } from './forms/forms.component';
import { ChapterFormComponent } from './forms/chapter-form/chapter-form.component';
import { SchoolFormComponent } from './forms/school-form/school-form.component';
import { CourseFormComponent } from './forms/course-form/course-form.component';
import { SectionFormComponent } from './forms/section-form/section-form.component';
import { TeacherFormComponent } from './forms/teacher-form/teacher-form.component';

@NgModule({
    declarations: [
        AcademyComponent,
        AcademyListComponent,
        TeacherListComponent,
        SectionListComponent,
        CourseListComponent,
        ChapterListComponent,
        FormsComponent,
        ChapterFormComponent,
        SchoolFormComponent,
        CourseFormComponent,
        SectionFormComponent,
        TeacherFormComponent
    ],
    imports     : [
        RouterModule.forChild(academyRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTooltipModule,
        FuseFindByKeyPipeModule,
        SharedModule,
        MatTabsModule
    ]
})
export class AcademyModule
{
}
