import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattaindanceComponent } from './studentattaindance.component';

describe('StudentattaindanceComponent', () => {
  let component: StudentattaindanceComponent;
  let fixture: ComponentFixture<StudentattaindanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentattaindanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentattaindanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
