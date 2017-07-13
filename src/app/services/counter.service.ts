import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CounterService {
  private counter = 0;
  constructor() { }

  getCounter(): Observable<number> {
    return Observable.of(this.counter);
  }

  increase(): Observable<number> {
    this.counter++;
    return Observable.of(this.counter);
  }

  decrease(): Observable<number> {
    this.counter--;
    return Observable.of(this.counter);
  }

}
