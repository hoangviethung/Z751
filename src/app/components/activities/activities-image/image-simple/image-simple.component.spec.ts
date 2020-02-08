import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSimpleComponent } from './image-simple.component';

describe('ImageSimpleComponent', () => {
  let component: ImageSimpleComponent;
  let fixture: ComponentFixture<ImageSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
