import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubliciteBoardComponent } from './publicite-board.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PubliciteBoardComponent
    }
];

@NgModule({
    declarations: [
        PubliciteBoardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        PubliciteBoardComponent
    ]
})
export class PubliciteBoardModule { }
