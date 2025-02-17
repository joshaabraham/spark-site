import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { SharedModule } from 'app/shared/shared.module';
import { invitationsRoutes } from 'app/modules/admin/apps/invitations/invitations.routing';
import { InvitationsComponent } from 'app/modules/admin/apps/invitations/invitations.component';
import { InvitationDetailsComponent} from 'app/modules/admin/apps/invitations/details/details.component';
import { InvitationsListComponent } from 'app/modules/admin/apps/invitations/list/list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoSidebarModule } from '../../ui/page-layouts/common/demo-sidebar/demo-sidebar.module';
import { CardsModule } from '../../ui/cards/cards.module';
import { FuseCardModule } from '@fuse/components/card';
import { FormsComponent } from './forms/forms.component';
import { InvitationModule } from '../../ui/invitation/invitation.module';

@NgModule({
    declarations: [
        InvitationsComponent,
        InvitationDetailsComponent,
        InvitationsListComponent,
        FormsComponent,
    ],
    imports     : [
        RouterModule.forChild(invitationsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTooltipModule,
        FuseFindByKeyPipeModule,
        FuseCardModule,
        SharedModule,
        MatTabsModule,
        DemoSidebarModule,
        MatListModule,
        InvitationModule
    ]
})
export class InvitationsModule
{
}
