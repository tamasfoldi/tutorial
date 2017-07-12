import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  counterStream = new Subject<number>();

  handleClick() {
    this.counterStream.next(1);
  }
}
