import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceCategoryComponent } from './commerce-category.component';

describe('CommerceCategoryComponent', () => {
  let component: CommerceCategoryComponent;
  let fixture: ComponentFixture<CommerceCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
