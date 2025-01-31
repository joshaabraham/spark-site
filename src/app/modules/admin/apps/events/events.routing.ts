import { Route } from '@angular/router';
import { EventsComponent } from 'app/modules/admin/apps/events/events.component';
import { EventsListComponent } from 'app/modules/admin/apps/events/list/list.component';
import { EventsDetailsComponent } from 'app/modules/admin/apps/events/details/details.component';
import { EventsResolver, EventResolver } from 'app/modules/admin/apps/events/events.resolvers';

export const eventsRoutes: Route[] = [
    {
        path: '',
        component: EventsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: EventsListComponent,
                resolve: {
                    events: EventsResolver
                }
            },
            {
                path: ':id',
                component: EventsDetailsComponent,
                resolve: {
                    event: EventResolver
                }
            }
        ]
    }
];
