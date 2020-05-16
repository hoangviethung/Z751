import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LanguageModel } from 'src/app/_core/models/language';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { BranchModel } from 'src/app/_core/models/branch.model';
import { APIConfig } from 'src/app/_core/API-config';
@Component({
	selector: 'app-branch',
	templateUrl: './branch.component.html',
	styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
	branchs: Array<BranchModel>
	branch: BranchModel
	isShowPopup: boolean = false;
	isEdit: boolean;
	templates: Array<TemplateModel> = TemplatesConfig;
	languageControl = new FormControl();
	languages: Array<LanguageModel>;
	constructor(
		private httpSvc: HttpService,
		private toastrSvc: ToastrService
	) { }

	ngOnInit(): void {
		this.getBranchs()
		this.languages = JSON.parse(localStorage.getItem('languages'));
	}

	getBranchs() {
		const option = new InputRequestOption()
		option.params = {
			languageId: '1'
		}
		this.httpSvc.get(APIConfig.Branch.Gets, option)
			.pipe(map((response) => response.data.items))
			.subscribe((branchs) => {
				console.log(branchs);
				this.branchs = branchs
			})
	}

	dateleBranch(id) {
		const option = new InputRequestOption()
		option.params = {
			'id': id
		}
		this.httpSvc.post(APIConfig.Branch.Delete, option)
			.subscribe((response) => {
				if (response.code === 200) {
					this.getBranchs();
					this.toastrSvc.success(response.message)
				} else {
					this.toastrSvc.error(response.message)
				}
			})
	}

	onOpenPopup(status, itemEdit?, isEdit?) {
		this.isShowPopup = status;
		if (itemEdit) {
			this.branch = itemEdit;
			this.isEdit = isEdit;
		} else {
			this.branch = new BranchModel();
			this.isEdit = false;
		}
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.getBranchs();
	}

	fetchBranch(e) {
		const option = new InputRequestOption();
		option.params = {
			languageId: e,
		};
		this.httpSvc.get(APIConfig.Branch.Gets, option)
			.pipe(map((response) => {
				return response.data.items;
			})
			)
			.subscribe((branchs) => {
				this.branchs = branchs;
			});
	}
}
