import {Injectable, Injector} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {AdminRoutingConfig} from "../../routing-config";
import {CookieService} from "../../services/cookie.service";
import {Router} from "@angular/router";
import {Permissions} from "../../enums/role.enum";

@Injectable()
export class AuthenticationComponent {

	public user: UserModel;

	public cookieSvc: CookieService;
	public router: Router;

	constructor (injector: Injector)
	{
		this.cookieSvc = injector.get(CookieService);
		this.router = injector.get(Router);

		const userStr = this.cookieSvc.get('user');
		if (userStr)
		{
			this.user = JSON.parse(userStr);
		}
	}

	public generateMenu()
	{
		if (!this.checkLoggedIn())
		{
			return [];
		}

		// Check full permission case
		if (this.user.isSuperAdmin || !this.user.permissions || this.user.permissions.length === 0)
		{
			return AdminRoutingConfig;
		}

		const newMenu = [];
		const cloneConfig = JSON.parse(JSON.stringify(AdminRoutingConfig));
		cloneConfig.forEach((menu) => {
			if (!menu.featureName || (menu.children && menu.children.length > 0))
			{
				if (menu.children && menu.children.length > 0)
				{
					if (typeof menu.featureName === 'string')
					{
						menu.children = menu.children.filter((children) =>
							!children.featureName ||
							(this.user.permissions as any[]).find((feature) => feature.name === children.featureName));
					}
					else if (Array.isArray(menu.featureName))
					{
						menu.children = menu.children.filter((children) =>
							!children.featureName ||
							(this.user.permissions as any[]).find((feature) => children.featureName.find((name) => name === feature.name)));
					}

					if (menu.children.length > 0)
					{
						newMenu.push(menu);
					}
				}
				else
				{
					newMenu.push(menu);
				}
			}
			else
			{
				if (typeof menu.featureName === 'string')
				{
					if ((this.user.permissions as any[]).find((feature) => feature.name === menu.featureName))
					{
						newMenu.push(menu);
					}
				}
				else if (Array.isArray(menu.featureName))
				{
					if ((this.user.permissions as any[]).find((feature) => menu.featureName.find((name) => name === feature.name)))
					{
						newMenu.push(menu);
					}
				}
			}
		});

		return newMenu;
	}

	public canAction(featureName: string, permission: Permissions)
	{
		if (!this.checkLoggedIn())
		{
			return false;
		}

		// Check full permission case
		if (this.user.isSuperAdmin || !this.user.permissions || this.user.permissions.length === 0)
		{
			return true;
		}
		return (this.user.permissions as any[]).find((feature) => feature.name === featureName && feature.permissions.find((d) => d === permission)) !== undefined;
	}

	checkLoggedIn (isRedirect: boolean = true)
	{
		if (!this.user)
		{
			if (isRedirect)
			{
				this.router.navigateByUrl('/account/login');
			}
			return false;
		}

		return true;
	}
}
