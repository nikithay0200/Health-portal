import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfoonthyroidComponent } from './getinfoonthyroid.component';

describe('GetinfoonthyroidComponent', () => {
  let component: GetinfoonthyroidComponent;
  let fixture: ComponentFixture<GetinfoonthyroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinfoonthyroidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfoonthyroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
