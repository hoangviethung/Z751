import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/_core/models/article.model';
import { CrudService } from 'src/_core/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiConfig } from 'src/_core/configs/api';
import { log } from 'util';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
	article: ArticleModel = new ArticleModel();
	isEdit = {
		status: false,
		buttonText: 'Cập nhật',
	}
	constructor(
		private crudSvc: CrudService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		this.activatedRoute.params
			.pipe(map((params) => params.articleid))
			.subscribe((articleId) => {
				if (articleId) {
					this.isEdit.status = true
					this.crudSvc
						.fetch(ApiConfig.article.gets, { languageId: 1 })
						.subscribe((result) => {
							this.article = result.data.filter(
								(item) => item.id == articleId
							)[0]
						})
				} else {
					this.isEdit.status = false
				}
			})
	}

	updateArticle() {
		this.crudSvc
			.update(ApiConfig.article.update, this.article)
			.subscribe((response) => {
				console.log(response)
				this.router.navigateByUrl('/admin/article')
			})
	}

	addArticle() {
		this.crudSvc
			.add(ApiConfig.article.add, this.article)
			.subscribe((response) => {
				console.log(response)
				this.router.navigateByUrl('/admin/article')
			})
	}
}
