import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexActivitiesComponent } from './index-activities.component';

describe('IndexActivitiesComponent', () => {
	let component: IndexActivitiesComponent;
	let fixture: ComponentFixture<IndexActivitiesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IndexActivitiesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IndexActivitiesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
