import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FuseCardModule } from '@fuse/components/card';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AboutMeComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        FuseCardModule,
        RouterModule
    ],
    exports: [
        AboutMeComponent
    ]
})
export class AboutMeModule { }
