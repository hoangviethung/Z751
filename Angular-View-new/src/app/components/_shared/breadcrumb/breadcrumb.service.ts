import { Injectable } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { API } from "src/core/configs/api";

@Injectable({
	providedIn: "root",
})
export class BreadcrumbService {
	constructor(private httpSvc: HttpService) {}
	getBreadcrumb(url: string) {
		const opts = new InputRequestOption();
		opts.params = {
			url: url,
		};
		return this.httpSvc.get(API.Common.Breadcrumb, opts);
	}
}
