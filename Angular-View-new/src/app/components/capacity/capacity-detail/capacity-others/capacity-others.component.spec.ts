import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityOthersComponent } from './capacity-others.component';

describe('CapacityOthersComponent', () => {
  let component: CapacityOthersComponent;
  let fixture: ComponentFixture<CapacityOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
