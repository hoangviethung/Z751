import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { LoadingService } from './loading.service'
import { LoadingComponent } from './loading.component'

@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [LoadingComponent],
	providers: [LoadingService],
	exports: [LoadingComponent, RouterModule],
})
export class LoadingModule {}
