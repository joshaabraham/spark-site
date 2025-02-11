import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { FuseCardModule } from '@fuse/components/card/card.module';

@NgModule({
    declarations: [
        GroupsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatMenuModule,
        FuseCardModule
    ],
    exports: [
        GroupsComponent
    ]
})
export class GroupsModule { }
