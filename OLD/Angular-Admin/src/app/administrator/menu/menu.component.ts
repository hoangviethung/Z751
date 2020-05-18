import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/_core/services/crud.service';
import { ApiConfig } from 'src/_core/configs/api';
import { MenuModel } from 'src/_core/models/menu.model';
import { ActivatedRoute, Router } from '@angular/router';


export enum Menu {
	main = 0,
	footer = 1
}

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	menus: Array<MenuModel>

	constructor(
		private Crud: CrudService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			const type = Menu[params.menuTitle]
			this.getsMenu(type, 1)
		})
	}

	getsMenu(type, language) {
		// CODE HERE !!!
		this.Crud.gets(ApiConfig.menu.gets, { type: type, languageId: language })
			.subscribe((response) => {
				this.menus = response.data
				console.log(this.menus);
			})
	}

	editMenu(id) {
		this.activatedRoute.params.subscribe(params => {
			this.router.navigate([`/admin/menu/${params.menuTitle}/edit/${id}`])
		})
	}


	deleteMenu(id: string) {
		console.log(id);
		this.Crud
			.delete(`${ApiConfig.menu.delete}?id=${id}`)
			.subscribe(() => {
				this.activatedRoute.params.subscribe(params => {
					const type = Menu[params.menuTitle]
					this.getsMenu(type, 1)
				})
			})
	}
}
