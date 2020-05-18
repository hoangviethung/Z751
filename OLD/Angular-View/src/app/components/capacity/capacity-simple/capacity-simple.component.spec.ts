import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitySimpleComponent } from './capacity-simple.component';

describe('CapacitySimpleComponent', () => {
  let component: CapacitySimpleComponent;
  let fixture: ComponentFixture<CapacitySimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitySimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitySimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
