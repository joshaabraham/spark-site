import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { CardsComponent } from 'app/modules/admin/ui/cards/cards.component';
import { InvitationCardComponent } from './invitation-card/invitation-card.component';
import { MapModalComponent } from './invitation-card/map-modal/map-modal.component';
import { CalendarModalComponent } from './invitation-card/calendar-modal/calendar-modal.component';
import { GoogleMapsModule } from '@angular/google-maps';

export const routes: Route[] = [
    {
        path     : '',
        component: CardsComponent
    },
];

@NgModule({
    declarations: [
        CardsComponent, InvitationCardComponent, MapModalComponent, CalendarModalComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
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
        GoogleMapsModule


    ],
    exports     : [
        CardsComponent, InvitationCardComponent, MapModalComponent, CalendarModalComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardsModule
{
}
