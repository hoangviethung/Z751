import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesVideosPopupComponent } from './activities-videos-popup.component';

describe('ActivitiesVideosPopupComponent', () => {
  let component: ActivitiesVideosPopupComponent;
  let fixture: ComponentFixture<ActivitiesVideosPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesVideosPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesVideosPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
