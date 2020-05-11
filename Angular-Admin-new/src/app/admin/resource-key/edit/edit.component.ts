import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResourceModel } from 'src/app/_core/models/resource.model';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
	@Input('resource') resource: any;
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		console.log(this.resource);
	}

	closePopup(status) {
		this.close.emit(status)
	}

	updateResource() {
		const params = new InputRequestOption();
		const enResource = {
			key: this.resource.name,
			value: this.resource.value.en,
			languageKey: '2'
		}
		params.body = enResource
		console.log(this.resource.value.vi);

		this.httpSvc.post(APIConfig.Resource.Update, params)
			.subscribe(() => {
				this.close.emit(false)
			})

		const viResource = {
			key: this.resource.name,
			value: this.resource.value.vi,
			languageKey: '1'
		}
		params.body = viResource
		this.httpSvc.post(APIConfig.Resource.Update, params)
			.subscribe(() => {
				this.close.emit(false)
			})
	}
}
