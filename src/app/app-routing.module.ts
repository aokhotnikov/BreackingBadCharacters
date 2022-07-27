import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then(m => m.UserListPageModule)
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./pages/view-user/view-user.module').then(m => m.ViewUserPageModule)
  },
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Lazy Loading
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
