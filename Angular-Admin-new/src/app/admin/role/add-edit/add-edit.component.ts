import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/_core/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { APIConfig } from 'src/app/_core/API-config';
import { RoleModel } from 'src/app/_core/models/role.model';
import { InputRequestOption } from 'src/app/_core/services/http.service';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	role: RoleModel;
	isEdit = false;

	constructor(
		private crudSvc: CrudService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {}

	getRole() {
		this.activatedRoute.params
			.pipe(map((params) => params.RoleId))
			.subscribe((RoleId) => {
				if (RoleId) {
					this.isEdit = true;
					this.crudSvc
						.get(APIConfig.Role.GetPermissions)
						.pipe(map((response) => response.data))
						.subscribe((data) => {
							console.log(data);
						});
				} else {
					this.isEdit = false;
				}
			});
	}

	updateRole() {
		const params = new InputRequestOption();
		params.body = this.role;
		this.crudSvc
			.update(APIConfig.Role.Update, params)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/banner');
			});
	}

	addRole() {
		const params = new InputRequestOption();
		params.body = this.role;
		this.crudSvc
			.update(APIConfig.Role.Update, params)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/banner');
			});
	}
}
