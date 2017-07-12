import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleService } from './services/title.service';
import { environment } from '../environments/environment';
import { APP_TITLE } from './tokens';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TitleService,
    {
      provide: APP_TITLE,
      useValue: environment.title
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
