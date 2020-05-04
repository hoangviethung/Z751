import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/_core/services/crud.service';
import { ApiConfig } from 'src/_core/configs/api';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SectionModel } from 'src/_core/models/section.model';
import { Section } from 'src/_core/configs/section';
import { __values } from 'tslib';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
	section: SectionModel = new SectionModel();
	constructor(
		private crudSvc: CrudService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.activatedRoute.params
			.subscribe((response) => {
				this.crudSvc.gets(ApiConfig.section.gets, { languageId: 1 })
					.subscribe((result) => {
						// ID CỦA ITEM CHỈNH SỦA
						const thisItemId = response.templateid;
						// ARRAY KẾT QUẢ TRẢ VỀ TẤT CẢ CÁC DATA SECTION
						const arrayData = result.data;
						console.log(arrayData);
						// MẢNG MỚI TẬP HỢP CÁC IDs
						const listID = arrayData.map(itemId => itemId.id)
						let sectionEditId;
						// LẶP MẢNG MỚI ĐÓ TÌM RA ID TRÙNG
						for (let item of listID) {
							// NẾU 1 TRONG NHƯNG ID KIA TRÙNG VS THIS ID
							if (item == thisItemId) {
								sectionEditId = item
							}
						}
						arrayData.forEach(objects => {
							if (objects['id'] == sectionEditId) {
								this.section = objects
							}
						});
					})
			})
	}

	updateSection() {
		this.crudSvc
			.update(ApiConfig.section.update, this.section)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/section')
			})
	}
}
