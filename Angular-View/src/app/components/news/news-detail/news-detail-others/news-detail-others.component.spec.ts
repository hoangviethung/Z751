import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailOthersComponent } from './news-detail-others.component';

describe('NewsDetailOthersComponent', () => {
  let component: NewsDetailOthersComponent;
  let fixture: ComponentFixture<NewsDetailOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
