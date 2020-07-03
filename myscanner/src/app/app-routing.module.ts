import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'camera-preview',
    loadChildren: () => import('./pages/camera-preview/camera-preview.module').then( m => m.CameraPreviewPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'pdf',
    loadChildren: () => import('./pages/pdf/pdf.module').then( m => m.PdfPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
