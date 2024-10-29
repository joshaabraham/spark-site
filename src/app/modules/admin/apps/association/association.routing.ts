import { Route } from '@angular/router';
import { AssociationComponent } from './association.component';
import { AssociationCategoriesResolver, AssociationCoursesResolver } from './association.resolvers';
import { AssociationListComponent } from './list/list.component';
import { AssociationDetailsComponent } from './details/details.component';

export const associationRoutes: Route[] = [
    {
        path     : '',
        component: AssociationComponent,
        resolve  : {
            categories: AssociationCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: AssociationListComponent,
                resolve  : {
                    courses: AssociationCoursesResolver
                }
            },
            {
                path     : ':id',
                component: AssociationDetailsComponent,
                resolve  : {
                    course: AssociationCoursesResolver
                }
            }
        ]
    }
];
