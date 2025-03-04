import { Route } from '@angular/router';
import { PubliciteComponent } from './publicite.component';
import { PubliciteListComponent } from './listes/publicite/list.component';
// import { PubliciteDetailsComponent } from './details/details.component';
// import { PubliciteFormComponent } from './forms/publicite-form.component';
import { CampagneResolver, PublicitesResolver, PubliciteResolver, CampagnesResolver } from './publicite.resolvers';
import { PubliciteDetailsComponent } from './details/publicite/details.component';
import { CampagneDetailsComponent } from './details/campagne/details.component';
import { CampagneListComponent } from './listes/campagne/list.component';
import { CampagneFormComponent } from './forms/campagne/form.component';
import { PubliciteFormComponent } from './forms/publicite/form.component';

export const publiciteRoutes: Route[] = [
    {
        path: '',
        component: PubliciteComponent,
        children: [
            {
                path: '',
                component: CampagneListComponent,
                resolve: {
                    publicites: CampagnesResolver
                }
            },
            {
                path: 'campagnes',
                component: CampagneListComponent,
                resolve: {
                    publicites: CampagnesResolver
                }
            },
            {
                path: 'publicites',
                component: PubliciteListComponent,
                resolve: {
                    publicites: PublicitesResolver
                }
            },
            {
                path: 'campagne/:id',
                component: CampagneDetailsComponent,
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
                path: 'campagne/Create',
                component: CampagneFormComponent
            },
            {
                path: 'publicite/Create',
                component: PubliciteFormComponent
            }
        ]
    }
];
