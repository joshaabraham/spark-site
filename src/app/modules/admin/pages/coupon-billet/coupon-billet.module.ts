import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponBilletComponent } from './coupon-billet.component';
import { CdkScrollableModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [CouponBilletComponent],
  imports: [
    CommonModule,
    CdkScrollableModule,
  ],exports: [
    CouponBilletComponent
  ]
})
export class CouponBilletModule { }
