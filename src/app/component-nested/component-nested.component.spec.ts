import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNestedComponent } from './component-nested.component';

describe('ComponentNestedComponent', () => {
  let component: ComponentNestedComponent;
  let fixture: ComponentFixture<ComponentNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
