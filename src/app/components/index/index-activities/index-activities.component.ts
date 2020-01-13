import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-index-activities',
	templateUrl: './index-activities.component.html',
	styleUrls: ['./index-activities.component.scss']
})
export class IndexActivitiesComponent implements OnInit {

	activities: [
		{
			url: 'activities',
			img: '/assets/images/products/p_1.jpg',
			title: "ĐỒ GỖ GIA DỤNG VÀ XUẤT KHẨU"
		},
		{
			url: 'activities',
			img: '/assets/images/products/p_2.jpg',
			title: "NGÀNH CƠ KHÍ, KẾT CẤU CÔNG NGHIỆP, CƠ ĐIỆN"
		},
	]
	constructor() { }

	ngOnInit() {
	}

}
