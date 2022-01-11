import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcoldproductsComponent } from './viewcoldproducts.component';

describe('ViewcoldproductsComponent', () => {
  let component: ViewcoldproductsComponent;
  let fixture: ComponentFixture<ViewcoldproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcoldproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcoldproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
