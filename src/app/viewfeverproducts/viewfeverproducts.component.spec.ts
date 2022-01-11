import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfeverproductsComponent } from './viewfeverproducts.component';

describe('ViewfeverproductsComponent', () => {
  let component: ViewfeverproductsComponent;
  let fixture: ComponentFixture<ViewfeverproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfeverproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfeverproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
