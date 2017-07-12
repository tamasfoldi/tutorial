import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {
  get title(): string {
    return 'app';
  }

  constructor() { }

}
