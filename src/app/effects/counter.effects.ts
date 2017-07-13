import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { CounterService } from '../services/counter.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CounterEffects {

  @Effect()
  onLoad$: Observable<Action> = this.actions$
    .ofType('LOAD')
    .startWith({ type: 'LOAD' })
    .switchMap(() => this.counterService.getCounter()
      .map(counter => Object.assign({}, { type: 'LOAD SUCCESS', payload: counter })));


  @Effect()
  onIncrease$: Observable<Action> = this.actions$
    .ofType('INCREASE')
    .switchMap(() => this.counterService.increase()
      .map(counter => Object.assign({}, { type: 'INCREASE SUCCESS', payload: counter })));

  @Effect()
  onDecrease$: Observable<Action> = this.actions$
    .ofType('DECREASE')
    .switchMap(() => this.counterService.decrease()
      .map(counter => Object.assign({}, { type: 'DECREASE SUCCESS', payload: counter })));

  constructor(private actions$: Actions, private counterService: CounterService) { }
}
