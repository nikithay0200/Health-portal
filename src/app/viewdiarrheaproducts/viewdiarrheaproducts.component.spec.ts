import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdiarrheaproductsComponent } from './viewdiarrheaproducts.component';

describe('ViewdiarrheaproductsComponent', () => {
  let component: ViewdiarrheaproductsComponent;
  let fixture: ComponentFixture<ViewdiarrheaproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdiarrheaproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdiarrheaproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
