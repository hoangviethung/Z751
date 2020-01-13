import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-index-products',
	templateUrl: './index-products.component.html',
	styleUrls: ['./index-products.component.scss']
})
export class IndexProductsComponent implements OnInit {
	products = [
		{
			url: 'products',
			img: '/assets/images/products/p_1.jpg',
			title: "ĐỒ GỖ GIA DỤNG VÀ XUẤT KHẨU"
		},
		{
			url: 'products',
			img: '/assets/images/products/p_2.jpg',
			title: "NGÀNH CƠ KHÍ, KẾT CẤU CÔNG NGHIỆP, CƠ ĐIỆN"
		},
		{
			url: 'products',
			img: '/assets/images/products/p_3.jpg',
			title: "NGÀNH CAO SU"
		},
		{
			url: 'products',
			img: '/assets/images/products/p_4.jpg',
			title: "CHẾ TẠO, SỬA CHỮA THIẾT BỊ"
		},
		{
			url: 'products',
			img: '/assets/images/products/p_5.jpg',
			title: "MAY CÔNG NGHIỆP, DỊCH VỤ KHU BÃI, LƯU TRỮ HÀNG HÓA"
		},
		{
			url: 'products',
			img: '/assets/images/products/p_6.jpg',
			title: "NGÀNH ÔTÔ"
		}
	]

	constructor() { }

	ngOnInit() {
	}

}
