import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-index-about-us',
	templateUrl: './index-about-us.component.html',
	styleUrls: ['./index-about-us.component.scss']
})
export class IndexAboutUsComponent implements OnInit {

	aboutUs = {
		img: "/assets/images/index/i_1.jpg",
		description: "<p>Công ty 751 / Tổng cục Kỹ thuật / Bộ Quốc phòng, đơn vị anh hùng lực lượng vũ trang nhân nhân được thành lập từ năm 1975 trên cơ sở tiếp quản lục quân công xưởng của chế độ ngụy, sài gòn là doanh nghiệp trực tiếp phục vụ quốc phòng an ninh và là cơ sở đảm bảo kỹ thuật lớn nhất của Quân đội ở phía nam.</p>",
		title: 'BỘ QUỐC PHÒNG',
		subTitle: 'CÔNG TY TNHH MỘT THÀNH VIÊN 751'
	}

	symbols = [
		{
			img: '/assets/images/icons/i_icon_1.svg',
			title: "Đoàn kết",
			description: "Là sức mạnh để vượt qua mọi khó khăn, thử thách."
		},
		{
			img: '/assets/images/icons/i_icon_2.svg',
			title: "Sáng tạo",
			description: "Là động lức trong đổi mới công nghệ, làm nền tảng cho sự phát triển bền vững."
		},
		{
			img: '/assets/images/icons/i_icon_3.svg',
			title: "Chất lượng",
			description: "Là mục tiêu hàng đầu để trao gửi đến Quý khách hàng."
		},
		{
			img: '/assets/images/icons/i_icon_4.svg',
			title: "Hiệu quả",
			description: "Là mục đích mang đến cho Quý khách và Công ty."
		}
	]

	constructor() { }

	ngOnInit() {
	}
}
