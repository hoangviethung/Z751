import { Component, OnInit } from '@angular/core';
import { AdminRoutingConfig } from '../../routing-config';

@Component({
	selector: 'app-aside-menu',
	templateUrl: './aside-menu.component.html',
	styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit {
	menus = AdminRoutingConfig;
	
	constructor() {}

	ngOnInit(): void {}
}
