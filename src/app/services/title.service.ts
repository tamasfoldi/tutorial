import { Injectable, Inject } from '@angular/core';
import { APP_TITLE } from '../tokens';

@Injectable()
export class TitleService {

  get title(): string {
    return this._title;
  }

  constructor( @Inject(APP_TITLE) private _title: string) { }
}
