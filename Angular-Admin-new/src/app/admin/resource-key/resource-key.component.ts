import { Component, OnInit } from '@angular/core';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { ResourceModel } from 'src/app/_core/models/resource.model';

@Component({
	selector: 'app-resource-key',
	templateUrl: './resource-key.component.html',
	styleUrls: ['./resource-key.component.scss']
})
export class ResourceKeyComponent implements OnInit {
	isShowPopup: boolean = false;
	resourcesVi: Array<ResourceModel>
	resourcesEn: Array<ResourceModel>
	resource: ResourceModel
	resources: Array<any>
	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		this.getResources();
	}

	getResources() {
		const getEnglishResource = (): Promise<Array<ResourceModel>> => {
			return new Promise((resolve, reject) => {
				const params = new InputRequestOption();
				params.params = {
					key: 'en'
				}
				this.httpSvc.get(APIConfig.Resource.Gets, params)
					.subscribe((resources) => {
						resolve(resources.data)
					})
			})
		}

		const getVietnameseResources = (): Promise<Array<ResourceModel>> => {
			return new Promise((resolve, reject) => {
				const params = new InputRequestOption();
				params.params = {
					key: 'vi'
				}
				this.httpSvc.get(APIConfig.Resource.Gets, params)
					.subscribe((resources) => {
						resolve(resources.data)
					})
			})
		}
		const pm: [Promise<Array<ResourceModel>>, Promise<Array<ResourceModel>>] = [getEnglishResource(), getVietnameseResources()]
		Promise.all(pm).then(([enResource, viResource]) => {
			this.resources = enResource.map((item, index) => {
				return {
					name: item.name,
					value: {
						en: item.value,
						vi: viResource[index].value
					}
				}
			})
		})
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
