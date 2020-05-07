import { Component, OnInit } from '@angular/core';
import { RoleModel } from 'src/app/_core/models/role.model';
import { HttpService } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-role',
	templateUrl: './role.component.html',
	styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
	roles: Array<RoleModel>;

	constructor(private httpSvc: HttpService, private router: Router) {}

	ngOnInit(): void {
		this.fetchRole();
	}

	fetchRole() {
		this.httpSvc
			.get(APIConfig.Role.Gets)
			.pipe(map((response) => response.data))
			.subscribe((roles) => {
				this.roles = roles;
			});
	}

	editRole(id: string | number) {
		this.router.navigate([`/admin/role/edit/${id}`]);
	}

	deleteRole(id: string | number) {}
}
