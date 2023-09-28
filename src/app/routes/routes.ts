import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () =>
          import('./views/views.module').then((m) => m.ViewsModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
