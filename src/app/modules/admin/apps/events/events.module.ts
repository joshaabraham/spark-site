import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FuseCardModule } from '@fuse/components/card';
import { EventsListComponent } from './list/list.component';
import { eventsRoutes } from './events.routing';
import { EventsDetailsComponent } from './details/details.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EventsComponent } from './events.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EventCreateFormComponent } from './createEventForm/event-create.form';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
    declarations: [
        EventsListComponent, EventsDetailsComponent, EventsComponent,
        EventCreateFormComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(eventsRoutes),
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDividerModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FuseCardModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatStepperModule
    ]
})
export class EventsModule { }
