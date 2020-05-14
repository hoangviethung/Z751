import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';
import { PermissionCollection } from '../enums/general.enum';
import { FeaturesListModel } from '../models/role.model';
import { CrudService } from './crud.service';
import { APIConfig } from '../API-config';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class RoleBasedService {
	private PermissionCollection: PermissionCollection = new PermissionCollection();
	private featuresObject: any = {};
	features: Array<FeaturesListModel> = [];

	constructor(
		private cookieSvc: CookieService,
		private crudSvc: CrudService
	) {}

	getUserRole() {
		return JSON.parse(this.cookieSvc.get('user')).roles;
	}

	getUserFeaturesCanDo(features) {
		this.featuresObject = {};
		const FeaturesNumberArray = features.map((item, index) => item.feature);
		const FeaturesNumberArray1 = FeaturesNumberArray.filter(
			(item, index) => FeaturesNumberArray.indexOf(item) == index
		);
		let obj = {};
		FeaturesNumberArray1.map((item) => {
			let permissionArray = [];
			features.forEach((feature) => {
				if (feature.feature == item) {
					permissionArray.push(feature.permission);
				}
			});
			obj[item] = permissionArray;
		});
		for (const key of Object.keys(obj)) {
			let newObj = {};
			if (obj[key].includes(this.PermissionCollection.View)) {
				newObj['View'] = true;
			} else {
				newObj['View'] = false;
			}
			if (obj[key].includes(this.PermissionCollection.Add)) {
				newObj['Add'] = true;
			} else {
				newObj['Add'] = false;
			}
			if (obj[key].includes(this.PermissionCollection.Edit)) {
				newObj['Edit'] = true;
			} else {
				newObj['Edit'] = false;
			}
			if (obj[key].includes(this.PermissionCollection.Delete)) {
				newObj['Delete'] = true;
			} else {
				newObj['Delete'] = false;
			}
			if (
				obj[key].includes(this.PermissionCollection.View) &&
				obj[key].includes(this.PermissionCollection.Add) &&
				obj[key].includes(this.PermissionCollection.Edit) &&
				obj[key].includes(this.PermissionCollection.Delete)
			) {
				newObj['All'] = true;
			} else {
				newObj['All'] = false;
			}
			this.featuresObject[key] = newObj;
		}
		return this.featuresObject;
	}
}
