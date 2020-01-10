import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/_utilities/services/page-info.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	constructor(private pageService: PageInfoService) {
		this.pageService.setTitle('Liên hệ');
	}

	ngOnInit() {
	}

}
