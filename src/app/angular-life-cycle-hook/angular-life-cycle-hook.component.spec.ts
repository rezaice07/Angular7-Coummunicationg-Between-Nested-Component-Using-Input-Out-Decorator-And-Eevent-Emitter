import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifeCycleHookComponent } from './angular-life-cycle-hook.component';

describe('AngularLifeCycleHookComponent', () => {
  let component: AngularLifeCycleHookComponent;
  let fixture: ComponentFixture<AngularLifeCycleHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLifeCycleHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLifeCycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
