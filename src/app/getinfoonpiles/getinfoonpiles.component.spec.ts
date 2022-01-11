import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfoonpilesComponent } from './getinfoonpiles.component';

describe('GetinfoonpilesComponent', () => {
  let component: GetinfoonpilesComponent;
  let fixture: ComponentFixture<GetinfoonpilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinfoonpilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfoonpilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
