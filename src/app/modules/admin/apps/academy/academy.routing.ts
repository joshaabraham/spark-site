import { Route } from '@angular/router';
import { AcademyComponent } from 'app/modules/admin/apps/academy/academy.component';
import { AcademyListComponent } from 'app/modules/admin/apps/academy/list/list.component';
import { AcademyCourseResolver, AcademyCoursesResolver, AcademySectionsResolver, AcademyChaptersResolver, AcademySchoolsResolver } from './academy.resolvers';
import { CourseDetailsComponent } from './details/couse/details.component';
import { SectionDetailsComponent } from './details/section/details.component';
import { ChapterDetailsComponent } from './details/chapter/details.component';

export const academyRoutes: Route[] = [
    {
        path     : '',
        component: AcademyComponent,
        resolve  : {
            schools: AcademySchoolsResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: AcademyListComponent,
                resolve  : {
                    courses: AcademyCoursesResolver
                }
            },
            {
                path     : 'courses/:courseId',
                component: CourseDetailsComponent,
                resolve  : {
                    course: AcademyCourseResolver,
                    sections: AcademySectionsResolver
                },
                children: [
                    {
                        path: 'sections/:sectionId',
                        component: SectionDetailsComponent,
                        resolve: {
                            section: AcademySectionsResolver,
                            chapters: AcademyChaptersResolver
                        },
                        children: [
                            {
                                path: 'chapters/:chapterId',
                                component: ChapterDetailsComponent,
                                resolve: {
                                    chapter: AcademyChaptersResolver
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
