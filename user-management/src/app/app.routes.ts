import { Route } from '@angular/router';

export const appRoutes: Route[] =  [
  {
    path: '',
    redirectTo: 'query',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/main.routes').then((m) => m.MAIN_ROUTES),
  },
];