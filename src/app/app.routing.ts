import { Routes } from '@angular/router';
import { ChildComponent } from './comonents/child/child.component';
import { CanLoadGuard } from './guards/can-load.guard';
import { Child2Component } from './components/child2/child2.component';

export const routes: Routes = [
  {
    path: '',
    component: ChildComponent
  },
  {
    path: '2',
    component: Child2Component,
    canActivate: [CanLoadGuard]
  },
  {
    path: 'lazy',
    canLoad: [CanLoadGuard],
    loadChildren: 'app/lazy/lazy.module#LazyModule'
  }
]
