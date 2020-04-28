import { Injectable } from '@angular/core'
import { BannerModel } from 'src/_core/models/banner.model'

@Injectable({
	providedIn: 'root',
})
export class BannerService {
	banners: Array<BannerModel>
}
