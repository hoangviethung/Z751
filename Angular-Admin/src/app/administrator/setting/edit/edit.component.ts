import { Component, OnInit, Input } from '@angular/core'

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
	@Input('setting') setting: any
	isShow: false

	constructor() {}

	ngOnInit(): void {
    console.log(this.setting);
    
  }
}
