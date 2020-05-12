import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/_core/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { APIConfig } from 'src/app/_core/API-config';
import {
	RoleModel,
	FeaturesListModel,
	FeaturePostModel,
} from 'src/app/_core/models/role.model';
import { InputRequestOption } from 'src/app/_core/services/http.service';
import { PermissionCollection } from 'src/app/_core/enums/general.enum';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	name: string;
	description: string;
	PermissionCollection: PermissionCollection = new PermissionCollection();
	role: RoleModel;
	isEdit = false;
	features: Array<FeaturesListModel> = [];
	featuresObject: any = {};
	constructor(
		private crudSvc: CrudService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private toastrSvc: ToastrService
	) { }

	ngOnInit(): void {
		this.getListFeatures();
		this.getAccount();
	}

	getAccount() {
		this.activatedRoute.params
			.pipe(map((params) => params.RoleId))
			.subscribe((RoleId) => {
				if (RoleId) {
					this.isEdit = true;
					const params = new InputRequestOption();
					params.params = {
						name: RoleId,
					};
					this.crudSvc
						.get(APIConfig.Role.GetPermissions, params)
						.pipe(map((response) => response.data))
						.subscribe((account) => {
							this.name = account.name;
							this.description = account.description;
							const FeaturesNumberArray = account.features.map(
								(item, index) => item.feature
							);
							const FeaturesNumberArray1 = FeaturesNumberArray.filter(
								(item, index) =>
									FeaturesNumberArray.indexOf(item) == index
							);
							let obj = {};
							FeaturesNumberArray1.map((item) => {
								let permissionArray = [];
								account.features.forEach((feature) => {
									if (feature.feature == item) {
										permissionArray.push(
											feature.permission
										);
									}
								});
								obj[item] = permissionArray;
							});
							for (const key of Object.keys(obj)) {
								let newObj = {};
								if (
									obj[key].includes(
										this.PermissionCollection.View
									)
								) {
									newObj['View'] = true;
								} else {
									newObj['View'] = false;
								}
								if (
									obj[key].includes(
										this.PermissionCollection.Add
									)
								) {
									newObj['Add'] = true;
								} else {
									newObj['Add'] = false;
								}
								if (
									obj[key].includes(
										this.PermissionCollection.Edit
									)
								) {
									newObj['Edit'] = true;
								} else {
									newObj['Edit'] = false;
								}
								if (
									obj[key].includes(
										this.PermissionCollection.Delete
									)
								) {
									newObj['Delete'] = true;
								} else {
									newObj['Delete'] = false;
								}
								if (
									obj[key].includes(
										this.PermissionCollection.View
									) &&
									obj[key].includes(
										this.PermissionCollection.Add
									) &&
									obj[key].includes(
										this.PermissionCollection.Edit
									) &&
									obj[key].includes(
										this.PermissionCollection.Delete
									)
								) {
									newObj['All'] = true;
								} else {
									newObj['All'] = false;
								}
								this.featuresObject[key] = newObj;
							}
						});
				} else {
					this.isEdit = false;
				}
			});
	}

	getListFeatures() {
		this.crudSvc
			.get(APIConfig.Role.GetFeatures)
			.pipe(map((response) => response.data))
			.subscribe((features) => {
				this.features = features;
				this.features.forEach((featureItem) => {
					featureItem.features.forEach((feature) => {
						this.featuresObject[feature.value] = {
							View: false,
							Add: false,
							Edit: false,
							Delete: false,
							All: false,
						};
					});
				});
			});
	}

	addRole() {
		const options = new InputRequestOption();
		options.body = {
			name: this.name,
			description: this.description,
			features: this.convertFeatureToArray(),
		};
		this.crudSvc
			.update(APIConfig.Role.Add, options)
			.subscribe((response) => {
				if (response.code === 200) {
					this.toastrSvc.success(response.message);
					this.router.navigateByUrl('/admin/role');
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	updateRole() {
		const options = new InputRequestOption();
		options.body = {
			name: this.name,
			description: this.description,
			features: this.convertFeatureToArray(),
		};
		this.crudSvc
			.update(APIConfig.Role.Update, options)
			.subscribe((response) => {
				if (response.code === 200) {
					this.toastrSvc.success(response.message);
					this.router.navigateByUrl('/admin/role');
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	convertFeatureToArray() {
		let FeaturesArray: Array<FeaturePostModel> = [];
		for (const key of Object.keys(this.featuresObject)) {
			for (const perKey of Object.keys(this.featuresObject[key])) {
				if (this.featuresObject[key][perKey]) {
					let FeatureObj: FeaturePostModel = new FeaturePostModel();
					FeatureObj.feature = Number(key);
					FeatureObj.permission = this.PermissionCollection[perKey];
					if (FeatureObj.permission != undefined) {
						FeaturesArray.push(FeatureObj);
					}
				}
			}
		}
		return FeaturesArray;
	}

	// Script check feature all, view, add, edit, delete

	updateFeature(value) {
		if (
			this.featuresObject[value].Add &&
			this.featuresObject[value].View &&
			this.featuresObject[value].Edit &&
			this.featuresObject[value].Delete
		) {
			this.featuresObject[value].All = true;
		} else {
			this.featuresObject[value].All = false;
		}
	}

	updateAllFeature(event, value) {
		if (event.target.checked) {
			this.featuresObject[value].Add = true;
			this.featuresObject[value].View = true;
			this.featuresObject[value].Edit = true;
			this.featuresObject[value].Delete = true;
		} else {
			this.featuresObject[value].Add = false;
			this.featuresObject[value].View = false;
			this.featuresObject[value].Edit = false;
			this.featuresObject[value].Delete = false;
		}
	}
}
