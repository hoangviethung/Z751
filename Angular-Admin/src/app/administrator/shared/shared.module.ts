import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PagingComponent } from './paging/paging.component'
import { RouterModule } from '@angular/router'
import { NumberPickerComponent } from './number-picker/number-picker.component'
import { TimePickerComponent } from './time-picker/time-picker.component'
import { AngularDateTimePickerModule } from 'angular2-datetimepicker'
import { ModalModule } from '../../../core/modal/modal.module'
import { ContentViewer } from './dynamic-content-viewer/dynamic-content-viewer'
import { SearchComponent } from './search-component/search.component'
import { SortComponent } from './sort-component/sort.component'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([{}]),
		AngularDateTimePickerModule,
		ModalModule,
	],
	declarations: [
		PagingComponent,
		NumberPickerComponent,
		TimePickerComponent,
		SearchComponent,
		SortComponent,
		ContentViewer,
	],
	exports: [
		PagingComponent,
		NumberPickerComponent,
		TimePickerComponent,
		SearchComponent,
		SortComponent,
		ContentViewer,
		CommonModule,
		FormsModule,
		RouterModule,
		AngularDateTimePickerModule,
	],
})
export class SharedModule {}
