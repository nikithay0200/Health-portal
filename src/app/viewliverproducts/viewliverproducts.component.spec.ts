import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewliverproductsComponent } from './viewliverproducts.component';

describe('ViewliverproductsComponent', () => {
  let component: ViewliverproductsComponent;
  let fixture: ComponentFixture<ViewliverproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewliverproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewliverproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
