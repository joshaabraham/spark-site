import { Route } from '@angular/router';
import { InvitationsComponent } from 'app/modules/admin/apps/invitations/invitations.component';
import { InvitationsListComponent } from 'app/modules/admin/apps/invitations/list/list.component';
import { InvitationsDetailsComponent } from 'app/modules/admin/apps/invitations/details/details.component';
import { InvitationsCategoriesResolver, InvitationsCourseResolver, InvitationsCoursesResolver } from 'app/modules/admin/apps/invitations/Invitations.resolvers';

export const invitationsRoutes: Route[] = [
    {
        path     : '',
        component: InvitationsComponent,
        resolve  : {
            categories: InvitationsCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: InvitationsListComponent,
                resolve  : {
                    courses: InvitationsCoursesResolver
                }
            },
            {
                path     : ':id',
                component: InvitationsDetailsComponent,
                resolve  : {
                    course: InvitationsCourseResolver
                }
            }
        ]
    }
];
