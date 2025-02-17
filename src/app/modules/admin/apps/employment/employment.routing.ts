import { Route } from '@angular/router';
import { ListEmploymentComponent } from './list/list.component';
import { DetailEmploymentComponent } from './detail/detail.component';


export const employmentRoutes: Route[] = [
    {
        path     : '',
        component: ListEmploymentComponent,

        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: ListEmploymentComponent,
            },
            {
                path     : ':id',
                component: DetailEmploymentComponent,
            }
        ]
    }
];
