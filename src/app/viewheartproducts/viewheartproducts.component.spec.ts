import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewheartproductsComponent } from './viewheartproducts.component';

describe('ViewheartproductsComponent', () => {
  let component: ViewheartproductsComponent;
  let fixture: ComponentFixture<ViewheartproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewheartproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewheartproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
