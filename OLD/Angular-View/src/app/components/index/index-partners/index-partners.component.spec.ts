import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPartnersComponent } from './index-partners.component';

describe('IndexPartnersComponent', () => {
  let component: IndexPartnersComponent;
  let fixture: ComponentFixture<IndexPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
