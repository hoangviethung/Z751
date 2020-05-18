import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { CrudService } from 'src/_core/services/crud.service';
import { ApiConfig } from 'src/_core/configs/api';
import { BranchModel } from 'src/_core/models/branch.model';
import { LanguageModel } from 'src/_core/models/language';
import { LanguageService } from 'src/_core/services/language.service';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss']
})

export class AddEditComponent implements OnInit {
	branch: BranchModel = new BranchModel()
	isEdit = {
		status: false,
	}
	languages: Array<LanguageModel>
	constructor(
		private activatedRoute: ActivatedRoute,
		private crudSvc: CrudService,
		private languageSvc: LanguageService,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.getLanguages();
		this.activatedRoute.params
			.pipe(map((params) => params.branchAdminId))
			.subscribe((branchAdminId, id: string = '1') => {
				if (branchAdminId) {
					console.log('Bạn đang cập nhật chi nhánh có ID => ' + branchAdminId);
					this.isEdit.status = true
					this.crudSvc
						.get(ApiConfig.branch.gets, { languageId: id })
						.subscribe((result) => {
							this.branch = result.data.items
							console.log(this.branch);
						})
				} else {
					this.isEdit.status = false
					console.log('Không tìm thấy ID cần sửa (có thể là bạn đang thêm chi nhánh)');
				}
			})
	}

	getLanguages() {
		this.languageSvc.getLanguages().subscribe((languages) => {
			this.languages = languages
			this.languageSvc.setLanguages(languages)
		})
	}

	addBranch() {
		console.log(this.branch);
		this.crudSvc
			.add(ApiConfig.branch.add, this.branch)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/branch')
			})
	}
}