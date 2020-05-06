import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TabDirective } from 'src/app/directive/tab.directive'
import { FormsModule } from '@angular/forms'
import { CKEditorModule } from 'ckeditor4-angular'
import { CKEditorComponent } from '../components/ckeditor/ckeditor.component'

@NgModule({
	declarations: [CKEditorComponent, TabDirective],
	imports: [CommonModule, FormsModule, CKEditorModule],
	exports: [FormsModule, CKEditorModule, CKEditorComponent, TabDirective],
})
export class SharedModule {}
