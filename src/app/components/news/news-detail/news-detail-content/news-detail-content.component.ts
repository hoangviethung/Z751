import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-news-detail-content',
	templateUrl: './news-detail-content.component.html',
	styleUrls: ['./news-detail-content.component.scss']
})
export class NewsDetailContentComponent implements OnInit {
	contentNewsDetail = [
		{
			title: 'Nga phóng thành công tàu Soyuz MS-03 lên Trạm vũ trụ quốc tế',
			time: '10 tháng 6 năm 2019',
			content: `<h5 style="font-size:18px;color:#2B2B2B;font-weight: 700;margin: 15px 0;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
			Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
			nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
			massa quis enim.</h5>
			<img style="width: 100%;height: auto;" src="/assets/images/news/news_detail.png" alt="" srcset="">
			<p style="margin: 15px 0;font-size: 18px;color:#2B2B2B;">Lorem ipsum dolor sit amet, consectetuer adipiscing
			elit.Aenean commodoligula egetdolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes,
			nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
			massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
			imperdiet a,venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.Integer tincidunt. Cras dapibus.
			Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat
			vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
			nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
			ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Nga phóng thành công tàu Soyuz MS-03 lên Trạm vũ trụ
			quốc tế
			</p>
			<p style="margin: 15px 0;font-size: 18px;color:#2B2B2B;">Lorem ipsum dolor sit amet, consectetuer adipiscing
			elit.Aenean commodoligula egetdolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes,
			nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
			massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
			imperdiet a,venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.Integer tincidunt. Cras dapibus.
			Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat
			vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
			nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
			ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Nga phóng thành công tàu Soyuz MS-03 lên Trạm vũ trụ
			quốc tế
			</p>
			<img style="width: 100%;height: auto;" src="/assets/images/news/news_detail.png" alt="" srcset="">
			<p style="margin: 15px 0;font-size: 18px;color:#2B2B2B;">Lorem ipsum dolor sit amet, consectetuer adipiscing
			elit.Aenean commodoligula egetdolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes,
			nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
			massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
			imperdiet a,venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.Integer tincidunt. Cras dapibus.
			Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat
			vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
			nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
			ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Nga phóng thành công tàu Soyuz MS-03 lên Trạm vũ trụ
			quốc tế`
		}
	]
	constructor() { }

	ngOnInit() {
	}

}
