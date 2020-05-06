import { Injectable } from '@angular/core'
import { BannerModel } from 'src/_core/models/banner.model'
import { Image } from 'src/_core/models/image.model'
import { CrudService } from 'src/_core/services/crud.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class BannerService {
	public banners: Array<BannerModel> = []
	public images: Array<Image>

	constructor(private crudSvc: CrudService) {}

	getBanners(url: string): Observable<Array<BannerModel>> {
		if (this.banners.length > 0) {
			return new Observable((observer) => {
				observer.next(this.banners)
			})
		} else {
			return this.crudSvc
				.gets(url, { languageId: 1 })
				.pipe(map((response) => response.data))
		}
	}

	setBanners(banners) {
		this.banners = banners
	}
}
