import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhighbpproductsComponent } from './viewhighbpproducts.component';

describe('ViewhighbpproductsComponent', () => {
  let component: ViewhighbpproductsComponent;
  let fixture: ComponentFixture<ViewhighbpproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewhighbpproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhighbpproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
