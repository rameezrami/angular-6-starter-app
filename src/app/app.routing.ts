import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  AuthGuard,
  GuestGuard,

  AppLayoutComponent,
  
} from './shared';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        canActivate:[AuthGuard]
      }
    ]
  }
  // {
  //   path: '',
  //   component: FullLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   canActivate : [AuthGuard],
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  //     },
  //   ]
  // }
  // {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
