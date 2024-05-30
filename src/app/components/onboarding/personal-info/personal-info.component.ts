import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  personalInfo!: FormGroup;
  loading = false;
  submitted = false;
  error?: string;

  gender: string[] = [
    'Male',
    'Female',
    'Transgender',
    'Others',
  ];

  highestEducation: string[] = [
    'Matric',
    'Intermediate',
    'Diploma',
    'Bachelor',
    'Master',
    'PHD'
  ];

  constructor(
    private _fb: FormBuilder,
    private route: Router
  ) {
    this.personalInfo = this._fb.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      highestEducation: ['', Validators.required],
      totalExperience: ['', Validators.required],
      relevantExperience: ['', Validators.required],
      currentCompany: ['', Validators.required],
      currentCTC: ['', Validators.required],
      expectedCTC: ['', Validators.required],
    })

  }

  // convenience getter for easy access to form fields
  //get f() { return this.personalInfo.controls; }

  // onSubmit() {
  //   this.submitted = true;

  //   // reset alert on submit
  //   this.error = '';

  //   // stop here if form is invalid
  //   if (this.personalInfo.invalid) {
  //     return;
  //   }

  //   this.loading = true;

  // }

  // Save and Next
  saveNext() {
    this.route.navigateByUrl('/onboarding/family');
  }

}
