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
import { PlayerDetailsComponent } from './detail/details.component';
import { PlayerListComponent } from './list/list.component';
import { PlayerComponent } from './player.component';
import { playerRoutes } from './player.routing';
import { FuseCardModule } from '@fuse/components/card';
import { PlayerFormComponent } from './forms/playerform.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [
        PlayerDetailsComponent,
        PlayerListComponent,
        PlayerComponent,
        PlayerFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(playerRoutes),
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
        FuseCardModule,
        MatDatepickerModule,
        MatNativeDateModule,

    ]
})
export class PlayerModule { }
