import { Route } from '@angular/router';
import { EquipeComponent } from './equipe.component';
import { EquipeListComponent } from './list/list.component';
import { EquipeDetailsComponent } from './/details/details.component';
import { EquipeResolver, EquipesResolver } from 'app/modules/admin/apps/equipe/equipe.resolvers';

export const equipeRoutes: Route[] = [
    {
        path     : '',
        component: EquipeComponent,
        resolve  : {
            categories: EquipesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: EquipeListComponent,
                resolve  : {
                    teams: EquipesResolver
                }
            },
            {
                path     : ':id',
                component: EquipeDetailsComponent,
                resolve  : {
                    team: EquipeResolver
                }
            }
        ]
    }
];