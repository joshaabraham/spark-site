import { Route } from '@angular/router';
import { PlayerComponent } from 'app/modules/admin/apps/player/player.component';
import { PlayerListComponent } from 'app/modules/admin/apps/player/list/list.component';
import { PlayerDetailsComponent } from 'app/modules/admin/apps/player/details/details.component';
import { PlayerCategoriesResolver, PlayerResolver, PlayersResolver } from 'app/modules/admin/apps/player/player.resolvers';

export const playerRoutes: Route[] = [
    {
        path     : '',
        component: PlayerComponent,
        resolve  : {
            categories: PlayerCategoriesResolver
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
