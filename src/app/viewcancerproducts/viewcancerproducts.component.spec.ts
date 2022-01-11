import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcancerproductsComponent } from './viewcancerproducts.component';

describe('ViewcancerproductsComponent', () => {
  let component: ViewcancerproductsComponent;
  let fixture: ComponentFixture<ViewcancerproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcancerproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcancerproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
