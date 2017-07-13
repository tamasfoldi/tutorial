import { Component } from '@angular/core';
import { Store, combineReducers } from '@ngrx/store';
import { State } from './reducer';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter$: Observable<number>;
  constructor(private store: Store<State>) {
    this.counter$ = this.store.select('counter', 'counter');
  }

  handleIncrease() {
    this.store.dispatch({ type: 'INCREASE' });
  }

  handleDecrease() {
    this.store.dispatch({ type: 'DECREASE' });
  }
}
