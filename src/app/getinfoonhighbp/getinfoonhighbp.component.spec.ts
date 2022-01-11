import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfoonhighbpComponent } from './getinfoonhighbp.component';

describe('GetinfoonhighbpComponent', () => {
  let component: GetinfoonhighbpComponent;
  let fixture: ComponentFixture<GetinfoonhighbpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinfoonhighbpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfoonhighbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
