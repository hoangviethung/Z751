import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceKeyComponent } from './resource-key.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ResourceKeyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceKeyRoutingModule {}
