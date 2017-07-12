import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnDestroy {
  counter = 0;
  @Input('counterStream')
  counterStream: Observable<number>;

  componentDestroy = new Subject();

  constructor(private _chDR: ChangeDetectorRef) { }

  ngOnInit() {
    this.counterStream.takeUntil(this.componentDestroy).subscribe(i => {
      this.counter += i;
      this._chDR.markForCheck();
    })
  }

  ngOnDestroy() {
    this.componentDestroy.next();
    this.componentDestroy.unsubscribe();
  }

}
