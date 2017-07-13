import { Injectable } from '@angular/core';
import { CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CanLoadGuard implements CanLoad, CanActivate {

  time = 10;
  constructor() {
    Observable.interval(1000)
      .take(10)
      .subscribe(val => this.time--);
  }
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.time === 0;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.time === 0;
  }

}
