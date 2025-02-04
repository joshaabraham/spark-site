import { Route } from '@angular/router';
import { AcademyComponent } from 'app/modules/admin/apps/academy/academy.component';
import { AcademyListComponent } from 'app/modules/admin/apps/academy/list/list.component';
import { AcademyDetailsComponent } from 'app/modules/admin/apps/academy/details/details.component';
import { AcademyCourseDetailsComponent } from 'app/modules/admin/apps/academy/course-details/course-details.component';
import { AcademySectionDetailsComponent } from 'app/modules/admin/apps/academy/section-details/section-details.component';
import { AcademyChapterDetailsComponent } from 'app/modules/admin/apps/academy/chapter-details/chapter-details.component';
import { AcademyCategoriesResolver, AcademyCourseResolver, AcademyCoursesResolver, AcademySectionsResolver, AcademyChaptersResolver } from './academy.resolvers';

export const academyRoutes: Route[] = [
    {
        path     : '',
        component: AcademyComponent,
        resolve  : {
            categories: AcademyCategoriesResolver
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
                component: AcademyCourseDetailsComponent,
                resolve  : {
                    course: AcademyCourseResolver,
                    sections: AcademySectionsResolver
                },
                children: [
                    {
                        path: 'sections/:sectionId',
                        component: AcademySectionDetailsComponent,
                        resolve: {
                            section: AcademySectionResolver,
                            chapters: AcademyChaptersResolver
                        },
                        children: [
                            {
                                path: 'chapters/:chapterId',
                                component: AcademyChapterDetailsComponent,
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
