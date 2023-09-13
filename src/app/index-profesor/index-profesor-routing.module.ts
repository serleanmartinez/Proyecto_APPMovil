import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexProfesorPage } from './index-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: IndexProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexProfesorPageRoutingModule {}
