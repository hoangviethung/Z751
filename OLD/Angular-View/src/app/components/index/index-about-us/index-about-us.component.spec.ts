import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAboutUsComponent } from './index-about-us.component';

describe('IndexAboutUsComponent', () => {
  let component: IndexAboutUsComponent;
  let fixture: ComponentFixture<IndexAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
