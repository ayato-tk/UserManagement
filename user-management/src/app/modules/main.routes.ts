import { Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/containers/main-container/main-container.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: 'query',
        loadChildren: () =>
          import('./query/query.module').then((m) => m.QueryModule),
      },
    ],
  },
];
