import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './components/onboarding/personal-info/personal-info.component';
import { FamilyDetailComponent } from './components/onboarding/family-detail/family-detail.component';
import { EducationalInfoComponent } from './components/onboarding/educational-info/educational-info.component';
import { ProfessionalInfoComponent } from './components/onboarding/professional-info/professional-info.component';
import { IndexComponent } from './components/employee/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' }, // Default path
  {
    path: 'index', component: IndexComponent,
  },
  {
    path: 'onboarding/personal', component: PersonalInfoComponent,
  },
  {
    path: 'onboarding/family', component: FamilyDetailComponent,
  },
  {
    path: 'onboarding/educational', component: EducationalInfoComponent,
  },
  {
    path: 'onboarding/professional', component: ProfessionalInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
