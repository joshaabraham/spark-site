import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-coupon-billet',
  templateUrl: './coupon-billet.component.html',
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CouponBilletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
