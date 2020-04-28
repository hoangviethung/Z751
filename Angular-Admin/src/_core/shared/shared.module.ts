import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TabDirective } from 'src/app/directive/tab.directive'
import { FileManagerComponent } from '../components/file-manager/file-manager.component'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [TabDirective, FileManagerComponent],
	imports: [CommonModule, FormsModule],
	exports: [TabDirective, FileManagerComponent, FormsModule],
})
export class SharedModule {}
