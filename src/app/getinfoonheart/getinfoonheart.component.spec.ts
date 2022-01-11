import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfoonheartComponent } from './getinfoonheart.component';

describe('GetinfoonheartComponent', () => {
  let component: GetinfoonheartComponent;
  let fixture: ComponentFixture<GetinfoonheartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinfoonheartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfoonheartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
