import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesImagesPopupComponent } from './activities-images-popup.component';

describe('ActivitiesImagesPopupComponent', () => {
	let component: ActivitiesImagesPopupComponent;
	let fixture: ComponentFixture<ActivitiesImagesPopupComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ActivitiesImagesPopupComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ActivitiesImagesPopupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
