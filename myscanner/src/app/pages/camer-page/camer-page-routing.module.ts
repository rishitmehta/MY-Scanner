import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamerPagePage } from './camer-page.page';

const routes: Routes = [
  {
    path: '',
    component: CamerPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamerPagePageRoutingModule {}
