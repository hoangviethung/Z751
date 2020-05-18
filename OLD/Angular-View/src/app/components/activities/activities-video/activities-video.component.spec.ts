import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesVideoComponent } from './activities-video.component';

describe('ActivitiesVideoComponent', () => {
  let component: ActivitiesVideoComponent;
  let fixture: ComponentFixture<ActivitiesVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
