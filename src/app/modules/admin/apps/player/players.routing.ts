import { Route } from '@angular/router';
import { PlayersComponent } from './players.component';
import { PlayersListComponent } from './list/list.component';
import { PlayerResolver, PlayersResolver } from './players.resolvers';
import { PlayerDetailsComponent } from './detail/details.component';

export const playersRoutes: Route[] = [
    {
        path: '',
        component: PlayersComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: PlayersListComponent,
                resolve: {
                    players: PlayersResolver // Précharge la liste des joueurs
                }
            },
            {
                path: ':id',
                component: PlayerDetailsComponent,
                resolve: {
                    player: PlayerResolver // Précharge les détails d'un joueur
                }
            }
        ]
    }
];
