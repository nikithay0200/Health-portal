import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpilesproductsComponent } from './viewpilesproducts.component';

describe('ViewpilesproductsComponent', () => {
  let component: ViewpilesproductsComponent;
  let fixture: ComponentFixture<ViewpilesproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpilesproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpilesproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
