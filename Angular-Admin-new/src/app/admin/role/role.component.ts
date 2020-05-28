import {Component, Injector, OnInit} from '@angular/core';
import { RoleModel } from 'src/app/_core/models/role.model';
import { APIConfig } from 'src/app/_core/API-config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/_core/services/crud.service';
import { InputRequestOption } from 'src/app/_core/services/http.service';
import { ToastrService } from 'ngx-toastr';
import {AuthenticationComponent} from "../../_core/components/base/authentication.component";
import {Permissions} from "../../_core/enums/role.enum";

@Component({
	selector: 'app-role',
	templateUrl: './role.component.html',
	styleUrls: ['./role.component.scss'],
})
export class RoleComponent extends AuthenticationComponent implements OnInit {
	public featureName: string = 'ManagePermissions';
	public permissions = Permissions;

	roles: Array<RoleModel>;

	constructor(
		injector: Injector,
		private crudSvc: CrudService,
		private toastrSvc: ToastrService
	) {
		super(injector);
	}

	ngOnInit(): void {
		this.fetchRole();
	}

	fetchRole() {
		this.crudSvc
			.get(APIConfig.Role.Gets)
			.pipe(map((response) => response.data))
			.subscribe((roles) => {
				this.roles = roles;
			});
	}

	editRole(id: string | number) {
		this.router.navigate([`/admin/role/edit/${id}`]);
	}

	deleteRole(name: string) {
		const options = new InputRequestOption();
		options.params = {
			name: name,
		};
		this.crudSvc
			.delete(APIConfig.Role.Delete, options)
			.subscribe((response) => {
				if (response.code === 200) {
					this.toastrSvc.success(response.message);
					this.fetchRole();
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}
}
