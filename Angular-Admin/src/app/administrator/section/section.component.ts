import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/_core/services/crud.service';
import { ApiConfig } from 'src/_core/configs/api';
import { SectionModel } from 'src/_core/models/section.model';
import { Router } from '@angular/router';
import { Section } from 'src/_core/configs/section';

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
	secitons: Array<SectionModel>
	constructor(
		private crudSvc: CrudService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.getSections();
	}

	getSections() {
		this.crudSvc.gets(ApiConfig.section.gets, { languageId: 1 })
			.subscribe((response) => {
				this.secitons = response.data;
				this.secitons.forEach(item => {
					item.ordertitle = Section[item.order].title;
				});
			});
	}

	editSection(id) {
		this.router.navigate([`/admin/section/edit/${id}`])
	}
}
