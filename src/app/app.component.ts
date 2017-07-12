import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  counter = 0;

  counterStream = new Subject<number>();

  handleClick() {
    this.counterStream.next(++this.counter);
  }
}
