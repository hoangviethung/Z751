import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/_core/services/crud.service';
import { Router } from '@angular/router';
import { ApiConfig } from 'src/_core/configs/api';

@Component({
	selector: 'app-main-menu',
	templateUrl: './main-menu.component.html',
	styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

	constructor(
		private crudSvc: CrudService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	getMainMenus() {
		// this.crudSvc.gets(ApiConfig.)
	}
}
