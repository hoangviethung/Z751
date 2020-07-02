import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class DialogService {
	private dialogSubject = new Subject<any>();

	constructor() {}

	setStateDialog() {
		this.dialogSubject.next(true);\
		console.log(this.dialogSubject);
	}

	getStateDialog(): Observable<any> {
		return this.dialogSubject.asObservable();
	}
}
