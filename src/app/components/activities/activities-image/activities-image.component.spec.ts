import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesImageComponent } from './activities-image.component';

describe('ActivitiesImageComponent', () => {
  let component: ActivitiesImageComponent;
  let fixture: ComponentFixture<ActivitiesImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
