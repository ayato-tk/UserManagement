import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryListComponent } from './containers/query-list/query-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QUERY_ROUTES } from './query.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [QueryListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(QUERY_ROUTES),
  ],
  exports: [QueryListComponent],
})
export class QueryModule {}
