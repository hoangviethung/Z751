import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailContentComponent } from './news-detail-content.component';

describe('NewsDetailContentComponent', () => {
  let component: NewsDetailContentComponent;
  let fixture: ComponentFixture<NewsDetailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
