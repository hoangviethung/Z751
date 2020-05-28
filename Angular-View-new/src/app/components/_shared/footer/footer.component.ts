import { Component, OnInit } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { BranchModel } from "src/core/models/Branch.model";
import { API } from "src/core/configs/api";
import { map } from "rxjs/operators";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
	constructor(private httpSvc: HttpService) {}
	branchs: Array<BranchModel>;
	headquater: BranchModel;
	AddressOppositeOffice: BranchModel;
	WebsiteRelatives = [];
	defaultImage = "https://i1.wp.com/www.uminahairandbeauty.com.au/wp-content/uploads/2018/08/background-wallpaper-noisy-gray-light-and-white-color-small-random-spots-texture.jpg?fit=256%2C256&ssl=1";
	ngOnInit() {
		this.getBranchs();
		this.getWebsiteRelatives();
	}

	getBranchs() {
		const option = new InputRequestOption();
		option.params = {
			languagueId: "1",
		};
		this.httpSvc
			.get(API.Branch.Gets, option)
			.pipe(map((response) => response.data.items))
			.subscribe((branchs) => {
				this.branchs = branchs;
				this.branchs.forEach((item, index) => {
					if (item.order == 1) {
						this.headquater = item;
					} else {
						this.AddressOppositeOffice = item;
					}
				});
			});
	}

	getWebsiteRelatives() {
		const opts = new InputRequestOption();
		opts.params = {
			type: "2",
		};
		this.httpSvc
			.get("/api/Menu/used/get", opts)
			.pipe(
				map((response) => {
					const newMenus = response.data.map((item) => {
						let newItem = item;
						if (newItem.parentId == null) {
							newItem.parentId = -99;
						}
						return newItem;
					});
					return newMenus;
				})
			)
			.subscribe((response) => {
				this.WebsiteRelatives = response;
			});
	}

	openWebsiteRelative(value: string) {
		window.open(value, "_blank");
	}
}
