import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	constructor(private pageService: PageInfoService) {
		this.pageService.setTitle('Năng lực');
	}

	ngOnInit() {
	}

}
