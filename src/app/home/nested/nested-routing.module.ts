import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NestedPage } from './nested.page';

const routes: Routes = [
  {
    path: '',
    component: NestedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NestedPageRoutingModule {}
