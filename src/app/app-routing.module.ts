import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    },
    {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m =>
    m.LoginPageModule),
    canLoad: [AutoLoginGuard]
    },
{
                path: 'datamobil',
                loadChildren: () => import('./datamobil/datamobil.module').then( m => m.DatamobilPageModule)
              },
              {
                path: 'datamobil_tambah',
                loadChildren: () => import('./datamobil_tambah/datamobil_tambah.module').then( m => m.DatamobilTambahPageModule)
              },
              {
                path: 'datamobil_edit/:id',
                loadChildren: () => import('./datamobil_edit/datamobil_edit.module').then( m => m.DatamobilEditPageModule)
              },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}