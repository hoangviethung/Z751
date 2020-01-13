import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';

@Component({
	selector: 'app-news-list',
	templateUrl: './news-list.component.html',
	styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
	listNews = [
		{
			id: '01',
			// url: 'news-detail',
			img: '/assets/images/news/n_1.jpg',
			title: 'Học viện Hậu cần gặp mặt, tôn vinh các nhà giáo',
			time: '10 tháng 6 năm 2019',
			desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem...'
		},
		{
			id: '02',
			// url: 'news-detail',
			img: '/assets/images/news/n_2.jpg',
			title: 'Sáng 18-11, Nga đã phóng thành công tàu vũ trụ Soyuz MS-03 Aenean commodo ligula eget dolor. Aenean massa.',
			time: '10 tháng 6 năm 2019',
			desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem...'
		},
		{
			id: '03',
			// url: 'news-detail',
			img: '/assets/images/news/n_3.jpg',
			title: 'Mỹ sẽ mở rộng quy mô Hải quân dưới thời Tổng thống Donald Trump',
			time: '10 tháng 6 năm 2019',
			desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem...'
		},
		{
			id: '04',
			// url: 'news-detail',
			img: '/assets/images/news/n_4.jpg',
			title: 'Để tổng kết cuối năm không hình thức',
			time: '10 tháng 6 năm 2019',
			desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem...'
		},
		{
			id: '05',
			// url: 'news-detail',
			img: '/assets/images/news/n_5.jpg',
			title: 'Học viện Hậu cần gặp mặt, tôn vinh các nhà giáo',
			time: '10 tháng 6 năm 2019',
			desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem...'
		}
	]
	constructor(private pageService: PageInfoService) {
		this.pageService.setTitle('Tin tức');
	}

	ngOnInit() {
	}

}
