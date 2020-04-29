import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TabDirective } from 'src/app/directive/tab.directive'
import { FormsModule } from '@angular/forms'
import { CKEditorModule } from 'ckeditor4-angular'

@NgModule({
	declarations: [TabDirective],
	imports: [CommonModule, FormsModule, CKEditorModule],
	exports: [TabDirective, FormsModule, CKEditorModule],
})
export class SharedModule {}
