import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import QRCodeStyling from 'qr-code-styling';

@Component({
  selector: 'app-coupon-billet',
  templateUrl: './coupon-billet.component.html',
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CouponBilletComponent implements OnInit, AfterViewInit  {


  @ViewChild('qrCodeContainer', { static: false }) qrCodeContainer!: ElementRef;
  qrCode: any;


  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.qrCode = new QRCodeStyling({
      width: 200,
      height: 200,
      data: 'https://mon-site.com',
      dotsOptions: { color: '#4267b2', type: 'rounded' },
      backgroundOptions: { color: '#ffffff' },
      imageOptions: { crossOrigin: 'anonymous', margin: 10 },
    });

    this.qrCode.append(this.qrCodeContainer.nativeElement);
  }
}
