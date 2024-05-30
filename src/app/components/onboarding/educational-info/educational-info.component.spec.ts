import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalInfoComponent } from './educational-info.component';

describe('EducationalInfoComponent', () => {
  let component: EducationalInfoComponent;
  let fixture: ComponentFixture<EducationalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationalInfoComponent]
    });
    fixture = TestBed.createComponent(EducationalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
