import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteethproductsComponent } from './viewteethproducts.component';

describe('ViewteethproductsComponent', () => {
  let component: ViewteethproductsComponent;
  let fixture: ComponentFixture<ViewteethproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewteethproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewteethproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
