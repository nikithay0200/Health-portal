import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewthyroidproductsComponent } from './viewthyroidproducts.component';

describe('ViewthyroidproductsComponent', () => {
  let component: ViewthyroidproductsComponent;
  let fixture: ComponentFixture<ViewthyroidproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewthyroidproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewthyroidproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
