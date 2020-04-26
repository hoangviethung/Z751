import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceKeyComponent } from './resource-key.component';

describe('ResourceKeyComponent', () => {
  let component: ResourceKeyComponent;
  let fixture: ComponentFixture<ResourceKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
