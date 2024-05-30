import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/services/core/core.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  employeeForm!: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.employeeForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''
    })
  }

  ngOnInit(): void {
    this.employeeForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      if (this.data) {
        this._empService.updateEmployee(this.data.id, this.employeeForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee record updated.', 'Done');
            this._dialogRef.close(true);
          },
          error: console.log,
        })
      }
      else {
        this._empService.addEmployee(this.employeeForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee record added.', 'Done');
            this._dialogRef.close(true);
          },
          error: (err) => {
            console.log(err);
          }
        })
      }
    }
  }

}
