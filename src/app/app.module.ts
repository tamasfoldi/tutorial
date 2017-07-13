import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChildComponent } from './comonents/child/child.component';
import { routes } from './app.routing';
import { CanLoadGuard } from './guards/can-load.guard';
import { Child2Component } from './components/child2/child2.component';
import { AuxChildComponent } from './components/aux-child/aux-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    AuxChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CanLoadGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
