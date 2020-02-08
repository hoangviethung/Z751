import { Injectable } from '@angular/core';
@Injectable()
export class AboutService {

	listMissionVision = [
		{
			image: './assets/images/about/mission-1.png',
			title: 'nhân lực',
			description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
		},
		{
			image: './assets/images/about/mission-2.png',
			title: 'doanh thu (vnd)',
			description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
		},
		{
			image: './assets/images/about/mission-3.png',
			title: 'ban lãnh đạo',
			description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
		}
	]

	listTimeLine = [
		{
			time: '1975',
			description: "Thành lập Xí nghiệp Liên hợp Z751 trên cơ sở tiếp quản Lục quân Công xưởng."
		},
		{
			time: '1993',
			description: "Chính thức đăng ký là Doanh nghiệp Quân đội."
		},
		{
			time: '2009',
			description: "Được chuyển đổi từ Doanh nghiệp Nhà nước sang thành Công ty TNHH MTV 751."
		},
		{
			time: '2019',
			description: "Được chuyển đổi từ Doanh nghiệp Nhà nước sang thành Công ty TNHH MTV 751."
		},
	]

	listStaff = [
		{
			position: 'Tổng giám đốc',
			name: "nguyễn xuân vũ",
			image: './assets/images/about/staff-01.png',
		},
		{
			position: 'Tổng giám đốc',
			name: "nguyễn xuân vũ",
			image: './assets/images/about/staff-02.png',
		},
		{
			position: 'Tổng giám đốc',
			name: "nguyễn xuân vũ",
			image: './assets/images/about/staff-03.png',
		},
		{
			position: 'Tổng giám đốc',
			name: "nguyễn xuân vũ",
			image: './assets/images/about/staff-04.png',
		}
	]

	listReward = [
		{
			image: './assets/images/about/reward-01.png',
			name: 'Người tiêu dùng bình chọn Hàng Việt Nam Chất Lượng Cao 2018',
		},
		{
			image: './assets/images/about/reward-02.png',
			name: 'Người tiêu dùng bình chọn Hàng Việt Nam Chất Lượng Cao 2017',
		},
		{
			image: './assets/images/about/reward-03.png',
			name: 'Người tiêu dùng bình chọn Hàng Việt Nam Chất Lượng Cao 2020',
		},
	]


	constructor() { }

	getListMission() {
		return this.listMissionVision;
	}

	getListTimeLine() {
		return this.listTimeLine;
	}

	getListStaff() {
		return this.listStaff;
	}

	getListReward() {
		return this.listReward;
	}
}
