import { Route } from '@angular/router';
import { InvitationsComponent } from 'app/modules/admin/apps/invitations/invitations.component';
import { InvitationResolver, InvitationsResolver, ProposedDatesResolver, ProposedDateResolver, InvitationNotesResolver, InvitationNoteResolver } from './Invitations.resolvers';
import { InvitationDetailsComponent } from './details/details.component';
import { InvitationsListComponent } from './list/list.component';
import { FormsDisponbiliteComponent } from './forms/forms.component';

export const invitationsRoutes: Route[] = [
    {
        path     : '',
        component: InvitationsComponent,
        // resolve  : {
        //     invitations: InvitationsResolver
        // },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: InvitationsListComponent,
                // resolve  : {
                //     invitations: InvitationsResolver
                // }
            },
            {
                path     : 'createDisponiblite',
                component: FormsDisponbiliteComponent,
                // resolve  : {
                //     invitation: InvitationResolver
                // }
            },
            {
                path     : ':id',
                component: InvitationDetailsComponent,
                // resolve  : {
                //     invitation: InvitationResolver
                // }
            },
        ]
    }
];
