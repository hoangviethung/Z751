import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/_core/services/crud.service';
import { ApiConfig } from 'src/_core/configs/api';
import { ResourceKeyModule } from './resource-key.module';

@Component({
	selector: 'app-resource-key',
	templateUrl: './resource-key.component.html',
	styleUrls: ['./resource-key.component.scss']
})
export class ResourceKeyComponent implements OnInit {
	resources: Array<ResourceKeyModule>
	constructor(
		private CruSvc: CrudService
	) { }

	ngOnInit(): void {
		this.getsResourceKey()
	}
	getsResourceKey() {
		this.CruSvc.gets(ApiConfig.resource.gets, { key: 'vi' })
			.subscribe((response) => {
				this.resources = response.data
			})
	}
}
