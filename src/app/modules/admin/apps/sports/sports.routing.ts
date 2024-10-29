import { Route } from '@angular/router';
import { SportsComponent } from 'app/modules/admin/apps/sports/sports.component';
import { SportsListComponent } from 'app/modules/admin/apps/sports/list/list.component';
import { SportsDetailsComponent } from 'app/modules/admin/apps/sports/details/details.component';
import { SportsCategoriesResolver, SportsCourseResolver, SportsCoursesResolver } from 'app/modules/admin/apps/sports/sports.resolvers';

export const SportsRoutes: Route[] = [
    {
        path     : '',
        component: SportsComponent,
        resolve  : {
            categories: SportsCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: SportsListComponent,
                resolve  : {
                    courses: SportsCoursesResolver
                }
            },
            {
                path     : ':id',
                component: SportsDetailsComponent,
                resolve  : {
                    course: SportsCourseResolver
                }
            }
        ]
    }
];
