import { Component, OnInit } from '@angular/core';
import { TitleService } from './services/title.service';
import { APP_TITLE } from './tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: TitleService,
      useFactory: (title: string) => new TitleService(`${title}_factory`),
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
