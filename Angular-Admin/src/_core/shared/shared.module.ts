import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabDirective } from 'src/app/directive/tab.directive';



@NgModule({
	declarations: [
		TabDirective
	],
	imports: [
		CommonModule,
	],
	exports: [
		TabDirective
	]
})
export class SharedModule { }
