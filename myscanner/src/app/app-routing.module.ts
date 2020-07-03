import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'pdf-page',
    loadChildren: () => import('./pages/pdf-page/pdf-page.module').then( m => m.PdfPagePageModule)
  },
  {
    path: 'edit-page',
    loadChildren: () => import('./pages/edit-page/edit-page.module').then( m => m.EditPagePageModule)
  },
  {
    path: 'camer-page',
    loadChildren: () => import('./pages/camer-page/camer-page.module').then( m => m.CamerPagePageModule)
  },
  {
    path: 'camera-priview',
    loadChildren: () => import('./pages/camera-priview/camera-priview.module').then( m => m.CameraPriviewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
