import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfoondiabetesComponent } from './getinfoondiabetes.component';

describe('GetinfoondiabetesComponent', () => {
  let component: GetinfoondiabetesComponent;
  let fixture: ComponentFixture<GetinfoondiabetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinfoondiabetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfoondiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
