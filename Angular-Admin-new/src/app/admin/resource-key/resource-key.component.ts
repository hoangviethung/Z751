import { Component, Injector, OnInit } from '@angular/core';
import {
	HttpService,
	InputRequestOption,
} from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { ResourceModel } from 'src/app/_core/models/resource.model';
import { ToastrService } from 'ngx-toastr';
import { Permissions } from '../../_core/enums/role.enum';
import { AuthenticationComponent } from '../../_core/components/base/authentication.component';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-resource-key',
	templateUrl: './resource-key.component.html',
	styleUrls: ['./resource-key.component.scss'],
})
export class ResourceKeyComponent extends AuthenticationComponent
	implements OnInit {
	public featureName: string = 'ManageResource';
	public permissions = Permissions;

	isShowPopup: boolean = false;
	resourcesVi: Array<any> = [];
	resourcesEn: Array<any> = [];
	resources: Array<any> = [];
	resource: any;
	isAddNew: boolean;
	newResource = {
		Key: '',
		Value: {
			en: '',
			vi: '',
		},
	};
	constructor(
		injector: Injector,
		private httpSvc: HttpService,
		private toastrSvc: ToastrService
	) {
		super(injector);
		this.isAddNew = environment.CanAddResourceKey;
	}

	ngOnInit(): void {
		this.getResources();
	}

	getResources() {
		this.resources = [];
		const getEnglishResource = (): Promise<Array<ResourceModel>> => {
			return new Promise((resolve, reject) => {
				this.httpSvc
					.get(APIConfig.Resource.enResource)
					.subscribe((resources) => {
						resolve(resources);
					});
			});
		};

		const getVietnameseResources = (): Promise<Array<ResourceModel>> => {
			return new Promise((resolve, reject) => {
				this.httpSvc
					.get(APIConfig.Resource.viResource)
					.subscribe((resources) => {
						resolve(resources);
					});
			});
		};

		const pm: [
			Promise<Array<ResourceModel>>,
			Promise<Array<ResourceModel>>
		] = [getEnglishResource(), getVietnameseResources()];

		Promise.all(pm).then(([enResource, viResource]) => {
			for (const key in enResource) {
				if (enResource.hasOwnProperty(key)) {
					let item = {};
					item['Key'] = key;
					item['Value'] = {};
					item['Value']['en'] = enResource[key];
					item['Value']['vi'] = viResource[key];
					item['isEdit'] = false;
					this.resources.push(item);
				}
			}
		});
	}

	updateResource() {
		const updateEnResource = () => {
			return new Promise((resolve, reject) => {
				const enOpts = new InputRequestOption();
				enOpts.params = {
					languageKey: 'en',
				};
				this.httpSvc
					.post(APIConfig.Resource.Generate, enOpts)
					.subscribe((response) => {
						resolve();
					});
			});
		};
		const updateViResource = () => {
			return new Promise((resolve, reject) => {
				const viOpts = new InputRequestOption();
				viOpts.params = {
					languageKey: 'vi',
				};
				this.httpSvc
					.post(APIConfig.Resource.Generate, viOpts)
					.subscribe((response) => {
						resolve();
					});
			});
		};
		const pm: [Promise<any>, Promise<any>] = [
			updateEnResource(),
			updateViResource(),
		];

		Promise.all(pm).then(([enResource, viResource]) => {
			this.getResources();
			this.toastrSvc.success('Cập nhật thành công!');
		});
	}

	editResource(resource) {
		resource.isEdit = true;
	}

	saveResource(resource) {
		const viOpts = new InputRequestOption();
		viOpts.body = {
			key: resource.Key,
			value: resource.Value.vi,
			languageKey: 'vi',
		};
		const enOpts = new InputRequestOption();
		enOpts.body = {
			key: resource.Key,
			value: resource.Value.en,
			languageKey: 'en',
		};
		this.httpSvc
			.post(APIConfig.Resource.Update, viOpts)
			.subscribe((response) => {
				if (response.code == 400) {
					this.httpSvc
						.post(APIConfig.Resource.Add, viOpts)
						.subscribe((response) => {
							console.log(response);
						});
				}
			});
		this.httpSvc
			.post(APIConfig.Resource.Update, enOpts)
			.subscribe((response) => {
				if (response.code == 400) {
					this.httpSvc
						.post(APIConfig.Resource.Add, enOpts)
						.subscribe((response) => {
							console.log(response);
						});
				}
			});

		resource.isEdit = false;
	}

	addResourceOpen(isAdd) {
		this.isAddNew = isAdd;
		if (isAdd == false) {
			this.newResource = {
				Key: '',
				Value: {
					en: '',
					vi: '',
				},
			};
		}
	}

	addResource() {
		const addEnResource = () => {
			return new Promise((resolve, reject) => {
				const enOpts = new InputRequestOption();
				enOpts.body = {
					key: this.newResource.Key,
					value: this.newResource.Value.en,
					languageKey: 'en',
				};
				this.httpSvc
					.post(APIConfig.Resource.Add, enOpts)
					.subscribe(() => {
						resolve();
					});
			});
		};
		const addViResource = () => {
			return new Promise((resolve, reject) => {
				const viOpts = new InputRequestOption();
				viOpts.body = {
					key: this.newResource.Key,
					value: this.newResource.Value.vi,
					languageKey: 'vi',
				};
				this.httpSvc
					.post(APIConfig.Resource.Add, viOpts)
					.subscribe(() => {
						resolve();
					});
			});
		};
		const pm: [Promise<any>, Promise<any>] = [
			addEnResource(),
			addViResource(),
		];

		Promise.all(pm).then(([enResource, viResource]) => {
			this.newResource = {
				Key: '',
				Value: {
					en: '',
					vi: '',
				},
			};
			this.updateResource();
			this.isAddNew = false;
			this.toastrSvc.success('Thêm mới thành công');
		});
	}
}
