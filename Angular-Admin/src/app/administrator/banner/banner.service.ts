import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { BannerModel } from 'src/_core/models/banner.model'

@Injectable({
	providedIn: 'root',
})
export class BannerService {
	constructor() {}

	get(id: string): Observable<BannerModel> {}
	getAll() {}
	add() {}
	update() {}
	delete() {}
}
