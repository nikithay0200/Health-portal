import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdiabetesproductsComponent } from './viewdiabetesproducts.component';

describe('ViewdiabetesproductsComponent', () => {
  let component: ViewdiabetesproductsComponent;
  let fixture: ComponentFixture<ViewdiabetesproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdiabetesproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdiabetesproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
