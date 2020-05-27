import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class RedirectSerivce {
	isRenderingSSR = true;
	routes: string[] = [
		"index",
		"about",
		"products",
		"departments",
		"capacities", // 0 - 4
		"news",
		"contact",
		"error",
		"product-detail",
		"news-detail", // 5 - 9
		"search",
	];

	getRouteNew(httpS: HttpClient, path: string) {
		return httpS.get(
			"http://27.71.234.45:8080/api/Common/getroute?url=" +
				encodeURIComponent(path)
		);
	}

	swithRoute(template: number, entityType?: number): string {
		switch (template) {
			case 0:
				if (entityType == 18) {
					return this.routes[8];
				}
				if (entityType == 2) {
					return this.routes[9];
				}
			case 1:
				return this.routes[0];
			case 2:
				return this.routes[1];
			case 3:
				return this.routes[2];
			case 4:
				return this.routes[3];
			case 5:
				return this.routes[4];
			case 6:
				return this.routes[5];
			case 7:
				return this.routes[6];
			default:
				return this.routes[7];
		}
	}
}
