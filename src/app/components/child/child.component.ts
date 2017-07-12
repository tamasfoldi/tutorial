import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  counter = 0;
  @Input('counterStream')
  counterStream: Observable<number>;

  constructor(private _chDR: ChangeDetectorRef) { }

  ngOnInit() {
    this.counterStream.subscribe(i => { // leaks
      this.counter += i;
      this._chDR.markForCheck();
    })
  }

}
