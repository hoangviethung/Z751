import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TabDirective } from 'src/app/directive/tab.directive'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [TabDirective],
	imports: [CommonModule, FormsModule],
	exports: [TabDirective, FormsModule],
})
export class SharedModule {}
