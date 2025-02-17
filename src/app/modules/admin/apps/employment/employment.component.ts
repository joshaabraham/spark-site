import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmploymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
