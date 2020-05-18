import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOthersComponent } from './product-others.component';

describe('ProductOthersComponent', () => {
  let component: ProductOthersComponent;
  let fixture: ComponentFixture<ProductOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
