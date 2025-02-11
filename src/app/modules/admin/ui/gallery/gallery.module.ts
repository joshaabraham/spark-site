import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { FuseCardModule } from '@fuse/components/card/card.module';

@NgModule({
    declarations: [
        GalleryComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        FuseCardModule
    ],
    exports: [
        GalleryComponent
    ]
})
export class GalleryModule { }
