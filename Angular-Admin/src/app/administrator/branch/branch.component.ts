import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/_core/services/crud.service';

@Component({
	selector: 'app-branch',
	templateUrl: './branch.component.html',
	styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

	constructor(
		private crudSvc: CrudService
	) { }

	ngOnInit(): void {
	}


	getsBranch() {

	}
}
