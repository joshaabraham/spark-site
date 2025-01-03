import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { SharedModule } from 'app/shared/shared.module';
import { eventsRoutes } from 'app/modules/admin/apps/events/events.routing';
import { EventsComponent } from 'app/modules/admin/apps/events/events.component';
import { EventsDetailsComponent } from 'app/modules/admin/apps/events/details/details.component';
import { EventsListComponent } from 'app/modules/admin/apps/events/list/list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { FuseCardModule } from '@fuse/components/card';

@NgModule({
    declarations: [
        EventsComponent,
        EventsDetailsComponent,
        EventsListComponent
    ],
    imports     : [
        RouterModule.forChild(eventsRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressBarModule,
        MatTooltipModule,
        FuseCardModule,
        SharedModule,
        MatSidenavModule,
        MatTabsModule,
        FuseFindByKeyPipeModule,
        MatSlideToggleModule,
        MatSelectModule,
    ]
})
export class EventsModule
{
}
