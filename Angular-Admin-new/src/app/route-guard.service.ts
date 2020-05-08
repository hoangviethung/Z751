import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './_core/services/authenticate.service';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
	constructor(
		private router: Router,
		private authenticateSvc: AuthenticateService
	) { }
	canActivate(): Observable<boolean> {
		return this.authenticateSvc.checkIsAuthenticate().pipe(
			map((response) => {
				if (response.code == 200) {
					return true;
				} else {
					console.log('Route is guarded');
					this.router.navigateByUrl('/account/login');
					return false;
				}
			})
		);
	}
}
