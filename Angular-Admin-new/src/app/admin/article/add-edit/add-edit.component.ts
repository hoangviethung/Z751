import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleModel } from 'src/app/_core/models/article.model';
import { LanguageModel } from 'src/app/_core/models/language';
import { InputRequestOption, HttpService } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
	@Input('article') article: ArticleModel = new ArticleModel()
	@Input('isEdit') isEdit: boolean
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>()
	languages: Array<LanguageModel>

	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		this.languages = JSON.parse(localStorage.getItem('dataLanguages'))
	}

	addArticle() {
		this.article.languageId = Number(this.article.languageId)
		const params = new InputRequestOption();
		params.body = this.article
		this.httpSvc.post(APIConfig.Banner.Add, params)
			.subscribe(() => {
				this.close.emit(false)
			})
	}

	updateArticle() {
		this.article.languageId = Number(this.article.languageId)
		const params = new InputRequestOption();
		params.body = this.article
		this.httpSvc.post(APIConfig.Banner.Update, params)
			.subscribe(() => {
				this.close.emit(false)
				console.log('Cập nhật thành công');
			})
	}

	closePopup(status) {
		this.close.emit(status)
	}
}
