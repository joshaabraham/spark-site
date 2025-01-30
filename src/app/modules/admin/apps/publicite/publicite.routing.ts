import { Route } from '@angular/router';
import { PubliciteComponent } from './publicite.component';
import { PubliciteListComponent } from './list/list.component';
import { PubliciteDetailsComponent } from './details/details.component';
import { PubliciteFormComponent } from './form/form.component';
import { CampagneResolver, PublicitesResolver, PubliciteResolver } from './publicite.resolvers';

export const publiciteRoutes: Route[] = [
    {
        path: '',
        component: PubliciteComponent,
        children: [
            {
                path: '',
                component: PubliciteListComponent,
                resolve: {
                    publicites: PublicitesResolver
                }
            },
            {
                path: 'campagne/:id',
                component: PubliciteDetailsComponent,
                resolve: {
                    campagne: CampagneResolver
                }
            },
            {
                path: 'publicite/:id',
                component: PubliciteDetailsComponent,
                resolve: {
                    publicite: PubliciteResolver
                }
            },
            {
                path: 'campagne/form',
                component: PubliciteFormComponent
            },
            {
                path: 'publicite/form',
                component: PubliciteFormComponent
            }
        ]
    }
];
