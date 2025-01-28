import { Route } from '@angular/router';
import { SportsComponent } from 'app/modules/admin/apps/sports/sports.component';
import { SportsListComponent } from 'app/modules/admin/apps/sports/list/list.component';
import { SportsDetailsComponent } from 'app/modules/admin/apps/sports/details/details.component';
import { SportByCodeResolver, SportResolver } from 'app/modules/admin/apps/sports/sports.resolvers';

export const sportsRoutes: Route[] = [
    {
        path     : '',
        component: SportsComponent,
        resolve  : {
            categories: SportResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: SportsListComponent,
                resolve  : {
                    courses: SportResolver
                }
            },
            {
                path     : ':id',
                component: SportsDetailsComponent,
                resolve  : {
                    course: SportByCodeResolver
                }
            }
        ]
    }
];
