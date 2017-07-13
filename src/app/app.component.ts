import { Component } from '@angular/core';
import { CanLoadGuard } from './guards/can-load.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private canLoad: CanLoadGuard) {

  }
}
