import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserDTO, UsersService } from '@user-management/data-access';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDialogComponent } from '../../../../shared';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.scss'],
  standalone: false,
})
export class QueryListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'email'];
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UsersService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.userService.fetchAll().subscribe((users: UserDTO[]) => {
      this.dataSource = new MatTableDataSource(users);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public openUserDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.fetchAll().subscribe((users: UserDTO[]) => {
          this.dataSource.data = users;
        });
      }
    });
  }
}
