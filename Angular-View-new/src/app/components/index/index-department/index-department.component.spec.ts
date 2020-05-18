import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDepartmentComponent } from './index-department.component';

describe('IndexDepartmentComponent', () => {
	let component: IndexDepartmentComponent;
	let fixture: ComponentFixture<IndexDepartmentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IndexDepartmentComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IndexDepartmentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
