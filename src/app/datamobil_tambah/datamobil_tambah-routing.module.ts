
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatamobilTambahPage } from './datamobil_tambah.page';

const routes: Routes = [
  {
    path: '',
    component: DatamobilTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatamobilTambahPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 13:27:53 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */