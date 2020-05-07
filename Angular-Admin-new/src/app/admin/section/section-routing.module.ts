import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionRoutingModule {}
