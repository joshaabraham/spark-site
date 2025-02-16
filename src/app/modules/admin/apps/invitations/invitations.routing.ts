import { Route } from '@angular/router';
import { InvitationsComponent } from 'app/modules/admin/apps/invitations/invitations.component';
import { InvitationResolver, InvitationsResolver } from './Invitations.resolvers';
import { InvitationDetailsComponent } from './details/details.component';
import { InvitationsListComponent } from './list/list.component';



export const invitationsRoutes: Route[] = [
    {
        path     : '',
        component: InvitationsComponent,
        resolve  : {
            invitations: InvitationsResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: InvitationsListComponent,
                resolve  : {
                    invitations: InvitationsResolver
                }
            },
            {
                path     : ':id',
                component: InvitationDetailsComponent,
                resolve  : {
                    invitation: InvitationResolver
                }
            }
        ]
    }
];
