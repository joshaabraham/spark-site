import { Route } from '@angular/router';
import { SportsComponent } from 'app/modules/admin/apps/sports/sports.component';
import { SportsListComponent } from 'app/modules/admin/apps/sports/list/list.component';
import { SportsDetailsComponent } from 'app/modules/admin/apps/sports/details/details.component';
import { SportByCodeResolver, SportResolver, SportsResolver } from 'app/modules/admin/apps/sports/sports.resolvers';

export const sportsRoutes: Route[] = [
    {
        path     : '',
        component: SportsComponent,
        resolve  : {
            categories: SportsResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: SportsListComponent,
                resolve  : {
                    courses: SportsResolver
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
