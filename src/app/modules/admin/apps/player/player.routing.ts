import { Route } from '@angular/router';
import { PlayerComponent } from './player.component';
import { PlayerListComponent } from './list/list.component';
import { PlayerDetailsComponent } from './detail/details.component';
import { PlayerResolver, PlayersResolver } from 'app/modules/admin/apps/player/player.resolvers';

export const playerRoutes: Route[] = [
    {
        path     : '',
        component: PlayerComponent,
        resolve  : {
            categories: PlayersResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: PlayerListComponent,
                resolve  : {
                    players: PlayersResolver
                }
            },
            {
                path     : ':id',
                component: PlayerDetailsComponent,
                resolve  : {
                    player: PlayerResolver
                }
            }
        ]
    }
];
