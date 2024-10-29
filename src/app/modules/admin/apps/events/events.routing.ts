import { Route } from '@angular/router';
import { EventsComponent } from 'app/modules/admin/apps/events/events.component';
import { EventsListComponent } from 'app/modules/admin/apps/events/list/list.component';
import { EventsDetailsComponent } from 'app/modules/admin/apps/events/details/details.component';
import { EventsCategoriesResolver, EventsCourseResolver, EventsCoursesResolver } from 'app/modules/admin/apps/events/events.resolvers';

export const eventsRoutes: Route[] = [
    {
        path     : '',
        component: EventsComponent,
        resolve  : {
            categories: EventsCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: EventsListComponent,
                resolve  : {
                    courses: EventsCoursesResolver
                }
            },
            {
                path     : ':id',
                component: EventsDetailsComponent,
                resolve  : {
                    course: EventsCourseResolver
                }
            }
        ]
    }
];
