import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
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
import { sportsRoutes } from 'app/modules/admin/apps/sports/sports.routing';
import { SportsComponent } from 'app/modules/admin/apps/sports/sports.component';
import { SportsDetailsComponent } from 'app/modules/admin/apps/sports/details/details.component';
import { SportsListComponent } from 'app/modules/admin/apps/sports/list/list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FuseCardModule } from '@fuse/components/card';

@NgModule({
    declarations: [
        SportsComponent,
        SportsDetailsComponent,
        SportsListComponent
    ],
    imports     : [
        CommonModule,
        RouterModule.forChild(sportsRoutes),
        ReactiveFormsModule,
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
        SharedModule,
        MatTabsModule,
        MatMenuModule,
        MatAutocompleteModule,
        FuseCardModule
    ]
})
export class SportsModule
{
}
