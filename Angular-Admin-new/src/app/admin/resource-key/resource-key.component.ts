import { Component, OnInit } from '@angular/core';
import {
	HttpService,
	InputRequestOption,
} from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { ResourceModel } from 'src/app/_core/models/resource.model';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-resource-key',
	templateUrl: './resource-key.component.html',
	styleUrls: ['./resource-key.component.scss'],
})
export class ResourceKeyComponent implements OnInit {
	isShowPopup: boolean = false;
	resourcesVi: Array<ResourceModel>;
	resourcesEn: Array<ResourceModel>;
	resource: ResourceModel;
	resources: Array<any>;
	constructor(
		private httpSvc: HttpService,
		private toastrSvc: ToastrService
	) {}

	ngOnInit(): void {
		this.getResources();
	}

	getResources() {
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
			console.log([enResource, viResource]);
		});
	}

	onOpenPopup(status, resource?) {
		this.isShowPopup = status;
		this.resource = resource;
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.getResources();
	}
}
