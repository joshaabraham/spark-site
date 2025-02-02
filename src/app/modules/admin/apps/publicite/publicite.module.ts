import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubliciteComponent } from './publicite.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    //PubliciteComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PubliciteComponent
  ]
})
export class PubliciteModule { }