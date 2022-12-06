
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatamobilEditPage } from './datamobil_edit.page';

const routes: Routes = [
  {
    path: '',
    component: DatamobilEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatamobilEditPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 13:27:53 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */