import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxChildComponent } from './aux-child.component';

describe('AuxChildComponent', () => {
  let component: AuxChildComponent;
  let fixture: ComponentFixture<AuxChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
