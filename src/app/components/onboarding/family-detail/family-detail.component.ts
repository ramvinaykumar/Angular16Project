import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-family-detail',
  templateUrl: './family-detail.component.html',
  styleUrls: ['./family-detail.component.scss']
})
export class FamilyDetailComponent {
  familyForm!: FormGroup;

  relationShip: string[] = [
    'Wife',
    'Husband',
    'Son',
    'Daughter',
    'Father',
    'Mother',
    'Brother',
    'Sister',
  ];

  constructor(private _fb: FormBuilder) {
    // this.familyForm = this._fb.group({
    //   items: this._fb.array([])
    // });
    this.createFamilyForm();
  }

  createFamilyForm() {
    this.familyForm = new FormGroup({
      items: new FormArray([
        new FormGroup({
          memberName: new FormControl(''),
          memberEmail: new FormControl(''),
          memberMobileNumber: new FormControl(''),
          memberCurrentAddress: new FormControl(''),
          memberRelationType: new FormControl('')
        })
      ])
    })
  }

  get items(): FormArray {
    return this.familyForm.get('items') as FormArray;
  }

  addMember(): void {
    this.items.push(this._fb.group({
      memberName: ['', Validators.required],
      memberEmail: ['', Validators.required],
      memberMobileNumber: ['', Validators.required],
      memberCurrentAddress: ['', Validators.required],
      memberRelationType: ['', Validators.required],
    }));

    console.log(this.items);
  }

  removeMember(index: number): void {
    this.items.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.familyForm.value);
  }
}
