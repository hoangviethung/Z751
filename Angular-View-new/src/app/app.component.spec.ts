import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("AppComponent", () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, BrowserAnimationsModule],
			declarations: [AppComponent],
		}).compileComponents();
	}));

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'z751-View-new'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual("z751-View-new");
	});

	it("should render title", () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector(".content span").textContent).toContain(
			"z751-View-new app is running!"
		);
	});
});
