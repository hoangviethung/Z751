import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/_core/services/crud.service';
import { ApiConfig } from 'src/_core/configs/api';
import { LanguageService } from 'src/_core/services/language.service';
import { LanguageModel } from 'src/_core/models/language';
import { BranchModel } from 'src/_core/models/branch.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-branch',
	templateUrl: './branch.component.html',
	styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
	branchs: Array<BranchModel>
	languages: Array<LanguageModel>
	languageId: number
	constructor(
		private languageSvc: LanguageService,
		private crudSvc: CrudService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.getLanguages();
		this.getsBranch();
	}

	getLanguages() {
		this.languageSvc.getLanguages().subscribe((languages) => {
			this.languages = languages
			this.languageSvc.setLanguages(languages)
		})
	}

	getsBranch(id: string = '1') {
		this.crudSvc.gets(ApiConfig.branch.gets, { languageId: id })
			.subscribe((response) => {
				this.branchs = response.data.items
				console.log(this.branchs);

			})
	}

	editBranch(id) {
		this.router.navigate([`/admin/branch/edit/${id}`])
	}

	deleteBranch(id) {
		this.crudSvc
			.delete(ApiConfig.branch.delete, { id: id })
			.subscribe((response) => {
				this.getsBranch(id)
			})
	}

	fetchBranch(e) {
		this.getsBranch(e.target.value)
		this.languageId = e.target.value
		console.log(this.languageId);
	}
}
