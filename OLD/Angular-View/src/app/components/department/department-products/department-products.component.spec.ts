import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentProductsComponent } from './department-products.component';

describe('DepartmentProductsComponent', () => {
  let component: DepartmentProductsComponent;
  let fixture: ComponentFixture<DepartmentProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
