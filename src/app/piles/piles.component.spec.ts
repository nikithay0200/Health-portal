import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilesComponent } from './piles.component';

describe('PilesComponent', () => {
  let component: PilesComponent;
  let fixture: ComponentFixture<PilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
