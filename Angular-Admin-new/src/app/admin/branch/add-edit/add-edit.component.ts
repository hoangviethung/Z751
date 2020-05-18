import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BranchModel } from 'src/app/_core/models/branch.model';
import { InputRequestOption, HttpService } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { ToastrService } from 'ngx-toastr';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { FormControl } from '@angular/forms';
import { LanguageModel } from 'src/app/_core/models/language';
@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
	@Input('branch') branch: BranchModel = new BranchModel();
	@Input('isEdit') isEdit: boolean;
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	templates: Array<TemplateModel> = TemplatesConfig;
	languagesControl = new FormControl();
	languages: LanguageModel
	constructor(
		private httpSvc: HttpService,
		private toastrSvc: ToastrService
	) { }

	ngOnInit(): void {
		this.languages = JSON.parse(localStorage.getItem('languages'));
	}

	updateBranch() {
		const option = new InputRequestOption();
		option.body = this.branch
		this.httpSvc.post(APIConfig.Branch.Update, option)
			.subscribe((response) => {
				if (response.code === 200) {
					this.close.emit(false)
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			})
	}

	addBranch() {
		const option = new InputRequestOption();
		option.body = this.branch
		this.httpSvc.post(APIConfig.Branch.Add, option)
			.subscribe((response) => {
				if (response.code === 200) {
					this.close.emit(false)
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			})
	}

	closePopup(status) {
		this.close.emit(status)
	}
}
