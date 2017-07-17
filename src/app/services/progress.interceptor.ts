import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/do';

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {
  public progress$ = new ReplaySubject<number | null>(0);

  constructor() { }

  intercept<T>(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<T>> {
    return next
      .handle(req.clone({ reportProgress: true }))
      .do((event: HttpEvent<T>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            this.progress$.next(null);
            break;
          case HttpEventType.DownloadProgress:
          case HttpEventType.UploadProgress:
            if (event.total) {
              this.progress$.next(Math.round((event.loaded / event.total) * 100));
            }
            break;
          case HttpEventType.Response:
            this.progress$.next(100);
            break;
        }
      });
  }
}
