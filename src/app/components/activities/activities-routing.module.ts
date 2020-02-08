import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { ActivitiesImageComponent } from './activities-image/activities-image.component';
import { ActivitiesVideoComponent } from './activities-video/activities-video.component';


const routes: Routes = [
	{
		path: 'images',
		component: ActivitiesImageComponent
	},
	{
		path: 'videos',
		component: ActivitiesVideoComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		LocalizeRouterModule.forChild(routes)
	],
	exports: [RouterModule, LocalizeRouterModule]
})
export class ActivitiesRoutingModule { }
