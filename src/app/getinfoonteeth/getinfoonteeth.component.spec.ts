import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfoonteethComponent } from './getinfoonteeth.component';

describe('GetinfoonteethComponent', () => {
  let component: GetinfoonteethComponent;
  let fixture: ComponentFixture<GetinfoonteethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinfoonteethComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfoonteethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
