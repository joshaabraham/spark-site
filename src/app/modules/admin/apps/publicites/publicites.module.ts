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
import { PublicitesComponent } from './publicites.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { publicitesRoutes } from './publicites.routing';
import { PubliciteDetailsComponent } from './details/publicite/details.component';
import { PubliciteFormComponent } from './forms/publicite/form.component';
import { PubliciteListComponent } from './listes/publicite/list.component';
import { CampagneDetailsComponent } from './details/campagne/details.component';
import { CampagneFormComponent } from './forms/campagne/form.component';
import { CampagneListComponent } from './listes/campagne/list.component';





@NgModule({
    declarations: [
        PublicitesComponent,

        PubliciteDetailsComponent,
        PubliciteFormComponent,
        PubliciteListComponent,
        CampagneDetailsComponent,
        CampagneFormComponent,
        CampagneListComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(publicitesRoutes),
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
        MatProgressBarModule,
        MatSidenavModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        FuseCardModule,
    ],
    exports: [
        PublicitesComponent,

        PubliciteDetailsComponent,
        PubliciteFormComponent,
        PubliciteListComponent,
        CampagneDetailsComponent,
        CampagneFormComponent,
        CampagneListComponent,
    ],

})
export class PublicitesModule { }
