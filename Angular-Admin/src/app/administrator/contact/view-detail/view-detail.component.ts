import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/_core/models/contact.model';
import { CrudService } from 'src/_core/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { ApiConfig } from 'src/_core/configs/api';
@Component({
	selector: 'app-view-detail',
	templateUrl: './view-detail.component.html',
	styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {
	contact: ContactModel = new ContactModel()
	constructor(
		private Crud: CrudService,
		private activatedRoute: ActivatedRoute,
	) { }

	ngOnInit(): void {
		this.activatedRoute.params
			.pipe(map((params) => params.contactid))
			.subscribe((contactId) => {
				if (contactId) {
					console.log('Bạn đan xem thông tin chi tiết của liên hệ có ID => ' + contactId);
					this.Crud.gets(ApiConfig.contact.gets)
						.subscribe((response) => {
							response.data.forEach(item => {
								if (item.id == contactId) {
									this.contact = item
								}
							});
						})
				} else {
					console.log('ID này không tồn tại');
				}
			})
	}
}
