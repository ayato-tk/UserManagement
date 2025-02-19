import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {UserDTO, UsersService} from "@user-management/data-access";

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.scss'],
  standalone: false
})
export class QueryListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'email'];
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.fetchAll().subscribe((users: UserDTO[]) => {
      this.dataSource = new MatTableDataSource(users);
    });
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
