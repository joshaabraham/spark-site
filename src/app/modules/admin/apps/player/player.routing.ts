import { Route } from '@angular/router';
import { PlayersComponent } from './player.component';
import { PlayersListComponent } from './list/list.component';
import { PlayerResolver, PlayersResolver } from './player.resolvers';
import { PlayerDetailsComponent } from './detail/details.component';

export const playersRoutes: Route[] = [
    {
        path     : '',
        component: PlayersComponent,
        resolve  : {
            categories: PlayersResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: PlayersListComponent,
                resolve  : {
                    courses: PlayersResolver
                }
            },
            {
                path     : ':id',
                component: PlayerDetailsComponent,
                resolve  : {
                    course: PlayerResolver
                }
            }
        ]
    }
];
