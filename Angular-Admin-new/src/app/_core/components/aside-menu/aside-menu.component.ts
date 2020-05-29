import {Component, Injector, OnInit} from '@angular/core';
import { AdminRoutingConfig } from '../../routing-config';
import {AuthenticationComponent} from "../base/authentication.component";

@Component({
	selector: 'app-aside-menu',
	templateUrl: './aside-menu.component.html',
	styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent extends AuthenticationComponent implements OnInit {
	menus = AdminRoutingConfig;

	constructor(injector: Injector) {
		super(injector);

		this.menus = this.generateMenu();
	}

	ngOnInit(): void {}
}
