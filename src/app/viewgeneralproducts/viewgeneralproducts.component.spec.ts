import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgeneralproductsComponent } from './viewgeneralproducts.component';

describe('ViewgeneralproductsComponent', () => {
  let component: ViewgeneralproductsComponent;
  let fixture: ComponentFixture<ViewgeneralproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgeneralproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgeneralproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
