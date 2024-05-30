import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/services/core/core.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { ConfirmationDialogModel } from '../../core/confirmation-dialog/confirmation-dialog';
import { ConfirmationDialogComponent } from '../../core/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'dob', 'gender', 'company', 'education', 'experience', 'package', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  result: string = '';

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _coreService: CoreService) {

  }

  ngOnInit(): void {
    this.getEmpList();
  }

  // Add New Employee
  openAddEditEmployeeForm() {
    const dialogRef = this._dialog.open(AddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        console.log(val);
        if (val) {
          this.getEmpList();
        }
      },
      error: console.log,
    })
  }

  // Get all employee list
  getEmpList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        // console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  // Apply the filter on employee list
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Delete an employee based on id
  deleteEmp(id: string) {

    // Without confirm dialog popup
    // this._empService.deleteEmployee(id).subscribe({
    //   next: (res) => {
    //     console.log('Delete Emp Called ==>> ' + id);
    //     this._coreService.openSnackBar('Employee record deleted.', 'Done');
    //     this.getEmpList();
    //   },
    //   error: console.log,
    // })

    // With confirm dialog popup
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmationDialogModel("Confirm Action", message);

    const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log('dialogRef.afterClosed().subscribe ==>> ' + this.result);
      if (this.result) {
        this._empService.deleteEmployee(id).subscribe({
          next: (res) => {
            console.log('Delete Emp Called ==>> ' + id);
            this._coreService.openSnackBar('Employee record deleted.', 'Done');
            this.getEmpList();
          },
          error: console.log,
        })
      }
    });
  }

  // Open the model for editing the exiting employee record
  openEditEmployeeForm(data: any) {
    const dialogRef = this._dialog.open(AddEditComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmpList();
        }
      },
      error: console.log,
    })
  }

}
