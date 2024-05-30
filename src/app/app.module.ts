import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddEditComponent } from './components/employee/add-edit/add-edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from './components/core/confirmation-dialog/confirmation-dialog.component';
import { MatConfirmDialogComponent } from './components/core/mat-confirm-dialog/mat-confirm-dialog.component';
import { PersonalInfoComponent } from './components/onboarding/personal-info/personal-info.component';
import { FamilyDetailComponent } from './components/onboarding/family-detail/family-detail.component';
import { EducationalInfoComponent } from './components/onboarding/educational-info/educational-info.component';
import { ProfessionalInfoComponent } from './components/onboarding/professional-info/professional-info.component';
import { IndexComponent } from './components/employee/index/index.component';
import { NavBarComponent } from './components/core/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditComponent,
    ConfirmationDialogComponent,
    MatConfirmDialogComponent,
    PersonalInfoComponent,
    FamilyDetailComponent,
    EducationalInfoComponent,
    ProfessionalInfoComponent,
    IndexComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
