import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FuseCardModule } from '@fuse/components/card';
import { EquipeComponent } from './equipe.component';
import { EquipeListComponent } from './list/list.component';
import { EquipeDetailsComponent } from './details/details.component';
import { equipeRoutes } from './equipe.routing';
import { FormsComponent } from './forms/forms.component';

@NgModule({
    declarations: [
        EquipeComponent,
        EquipeListComponent,
        EquipeDetailsComponent,
        FormsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(equipeRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        FuseCardModule
    ]
})
export class EquipeModule { }
