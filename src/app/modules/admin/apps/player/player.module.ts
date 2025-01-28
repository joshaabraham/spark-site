import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { PlayerFormComponent } from './forms/playerform.component';
import { RouterModule } from '@angular/router';
import { playerRoutes } from './player.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseCardModule } from '@fuse/components/card';
import { PlayerDetailsComponent } from './detail/details.component';
import { PlayerListComponent } from './list/list.component';

@NgModule({
  declarations: [PlayerFormComponent, PlayerDetailsComponent, PlayerListComponent],
  imports: [
    RouterModule.forChild(playerRoutes),
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FuseCardModule,
  ]
})
export class PlayerModule { }

