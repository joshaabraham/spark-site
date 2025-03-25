import { Route } from '@angular/router';
import { PublicitesComponent } from './publicites.component';
import { CampagneListComponent } from './listes/campagne/list.component';
import { PubliciteListComponent } from './listes/publicite/list.component';
import { CampagneDetailsComponent } from './details/campagne/details.component';
import { PubliciteDetailsComponent } from './details/publicite/details.component';
import { CampagneFormComponent } from './forms/campagne/form.component';
import { PubliciteFormComponent } from './forms/publicite/form.component';


export const publicitesRoutes: Route[] = [
    {
        path: '',
        component: PublicitesComponent,
        children: [
            {
                path: '',
                component: CampagneListComponent,
            },
            {
                path: 'campagnes',
                component: CampagneListComponent,
            },
            {
                path: 'publicites',
                component: PubliciteListComponent,
                // resolve: {
                //     publicites: PublicitesResolver
                // }
            },
            {
                path: 'campagne/:id',
                component: CampagneDetailsComponent,
                // resolve: {
                //     campagne: CampagneResolver
                // }
            },
            {
                path: 'publicite/:id',
                component: PubliciteDetailsComponent,
                // resolve: {
                //     publicite: PubliciteResolver
                // }
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
