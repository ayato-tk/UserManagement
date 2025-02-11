import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.scss'],
  standalone: false
})
export class QueryListComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'email'];
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    console.log(process.env.API_URL)
    const users = [
      { name: 'João Silva', email: 'joao.silva@example.com' },
      { name: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
      { name: 'Pedro Souza', email: 'pedro.souza@example.com' },
    ];

    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
