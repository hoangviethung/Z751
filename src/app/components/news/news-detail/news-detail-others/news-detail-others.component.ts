import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-news-detail-others',
	templateUrl: './news-detail-others.component.html',
	styleUrls: ['./news-detail-others.component.scss']
})
export class NewsDetailOthersComponent implements OnInit {
	listNewsOthers = [
		{
			url: '/',
			desc: 'Mỹ sẽ mở rộng quy mô Hải quân dưới thời Tổng thống Donald',
			time: '10 tháng 6 năm 2019',
			img: '/assets/images/news/n_1.jpg'
		},
		{
			url: '/',
			desc: 'Mỹ sẽ mở rộng quy mô Hải quân dưới thời Tổng thống Donald',
			time: '10 tháng 6 năm 2019',
			img: '/assets/images/news/n_2.jpg'
		},
		{
			url: '/',
			desc: 'Mỹ sẽ mở rộng quy mô Hải quân dưới thời Tổng thống Donald',
			time: '10 tháng 6 năm 2019',
			img: '/assets/images/news/n_3.jpg'
		},
		{
			url: '/',
			desc: 'Mỹ sẽ mở rộng quy mô Hải quân dưới thời Tổng thống Donald',
			time: '10 tháng 6 năm 2019',
			img: '/assets/images/news/n_4.jpg'
		},
		{
			url: '/',
			desc: 'Mỹ sẽ mở rộng quy mô Hải quân dưới thời Tổng thống Donald',
			time: '10 tháng 6 năm 2019',
			img: '/assets/images/news/n_5.jpg'
		},
	]
	constructor() { }

	ngOnInit() {
	}

}
