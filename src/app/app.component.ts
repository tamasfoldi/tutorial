import { Component, OnInit } from '@angular/core';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private _titleService: TitleService) { }

  ngOnInit() {
    this.title = this._titleService.title;
  }
}
