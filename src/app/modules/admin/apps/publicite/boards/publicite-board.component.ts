import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-publicite-board',
  templateUrl: './publicite-board.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PubliciteBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
