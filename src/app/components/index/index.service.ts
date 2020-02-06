import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class IndexService {

	newsList = [
		{
			url: "news",
			title: "Nga công bố lý do triển khai máy bay tiêm kích MIG-31 tới Syria",
			time: "10 tháng 6 năm 2019",
			description: "QĐND Online - Ngày 16-11, hãng tin Lenta dẫn đăng tải, Bộ Quốc phòng Nga đã",
			img: "/assets/images/news/n_1.jpg"
		},
		{
			url: "news",
			title: "Học viện Hậu cần gặp mặt, tôn vinh các nhà giáo",
			time: "10 tháng 6 năm 2019",
			description: "QĐND Online - Ngày 16-11, hãng tin Lenta dẫn đăng tải, Bộ Quốc phòng Nga đã",
			img: "/assets/images/news/n_2.jpg"
		},
		{
			url: "news",
			title: "Sáng 18-11, Nga đã phóng thành công tàu vũ trụ Soyuz MS-03",
			time: "10 tháng 6 năm 2019",
			description: "QĐND Online - Ngày 16-11, hãng tin Lenta dẫn đăng tải, Bộ Quốc phòng Nga đã",
			img: "/assets/images/news/n_3.jpg"
		},
		{
			url: "news",
			title: "Mỹ sẽ mở rộng quy mô Hải quân dưới thời Tổng thống Donald Trump",
			time: "10 tháng 6 năm 2019",
			description: "QĐND Online - Ngày 16-11, hãng tin Lenta dẫn đăng tải, Bộ Quốc phòng Nga đã",
			img: "/assets/images/news/n_4.jpg"
		},
		{
			url: "news",
			title: "Để tổng kết cuối năm không hình thức",
			time: "10 tháng 6 năm 2019",
			description: "QĐND Online - Ngày 16-11, hãng tin Lenta dẫn đăng tải, Bộ Quốc phòng Nga đã",
			img: "/assets/images/news/n_5.jpg"
		},
		{
			url: "news",
			title: "Để tổng kết cuối năm không hình thức",
			time: "10 tháng 6 năm 2019",
			description: "QĐND Online - Ngày 16-11, hãng tin Lenta dẫn đăng tải, Bộ Quốc phòng Nga đã",
			img: "/assets/images/news/n_5.jpg"
		}
	]

	activitiesList = [
		{
			typeName: 'Album',
			time: '25/04/2019',
			url: 'activities',
			img: '/assets/images/products/p_1.jpg',
			title: "ĐỒ GỖ GIA DỤNG VÀ XUẤT KHẨU",
		},
		{
			typeName: 'Video',
			time: '25/04/2019',
			url: 'activities',
			img: '/assets/images/products/p_2.jpg',
			title: "NGÀNH CƠ KHÍ, KẾT CẤU CÔNG NGHIỆP, CƠ ĐIỆN"
		},
		{
			typeName: 'Album',
			time: '25/04/2019',
			url: 'activities',
			img: '/assets/images/products/p_1.jpg',
			title: "ĐỒ GỖ GIA DỤNG VÀ XUẤT KHẨU",
		},
		{
			typeName: 'Video',
			time: '25/04/2019',
			url: 'activities',
			img: '/assets/images/products/p_2.jpg',
			title: "NGÀNH CƠ KHÍ, KẾT CẤU CÔNG NGHIỆP, CƠ ĐIỆN"
		},
		{
			typeName: 'Album',
			time: '25/04/2019',
			url: 'activities',
			img: '/assets/images/products/p_1.jpg',
			title: "ĐỒ GỖ GIA DỤNG VÀ XUẤT KHẨU",
		},
		{
			typeName: 'Video',
			time: '25/04/2019',
			url: 'activities',
			img: '/assets/images/products/p_2.jpg',
			title: "NGÀNH CƠ KHÍ, KẾT CẤU CÔNG NGHIỆP, CƠ ĐIỆN"
		},
		{
			typeName: 'Album',
			time: '25/04/2019',
			url: 'activities',
			img: '/assets/images/products/p_1.jpg',
			title: "ĐỒ GỖ GIA DỤNG VÀ XUẤT KHẨU",
		},
		{
			typeName: 'Video',
			time: '25/04/2019',
			url: 'activities',
			img: '/assets/images/products/p_2.jpg',
			title: "NGÀNH CƠ KHÍ, KẾT CẤU CÔNG NGHIỆP, CƠ ĐIỆN"
		},
	]

	constructor() { }

	getListNews() {
		return this.newsList;
	}

	getListActivities() {
		return this.activitiesList;
	}
}
