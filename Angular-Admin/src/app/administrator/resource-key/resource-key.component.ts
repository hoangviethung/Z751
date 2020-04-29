import { Component, OnInit } from '@angular/core'
import { CrudService } from 'src/_core/services/crud.service'

@Component({
	selector: 'app-resource-key',
	templateUrl: './resource-key.component.html',
	styleUrls: ['./resource-key.component.scss'],
})
export class ResourceKeyComponent implements OnInit {
	constructor(private crudSvc: CrudService) {}

	ngOnInit(): void {}

	getsResourceKeys() {}
}
