import { Routes } from '@angular/router';
import { QueryListComponent } from './containers/query-list/query-list.component';

export const QUERY_ROUTES: Routes = [
  {
    path: '',
    component: QueryListComponent,
  },
  //{ path: ':id', component: QueryDetailsComponent },
];
