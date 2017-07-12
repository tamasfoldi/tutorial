import { Component, OnInit, Inject } from '@angular/core';
import { TitleService } from './services/title.service';
import { APP_TITLE } from './tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: TitleService,
      useClass: class extends TitleService {
        constructor(title: string) {
          super(`${title}_class`);
        }
      },
      deps: [APP_TITLE]
    }
  ]
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private _titleService: TitleService) { }

  ngOnInit() {
    this.title = this._titleService.title;
  }
}
