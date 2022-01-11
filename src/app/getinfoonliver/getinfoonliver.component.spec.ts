import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfoonliverComponent } from './getinfoonliver.component';

describe('GetinfoonliverComponent', () => {
  let component: GetinfoonliverComponent;
  let fixture: ComponentFixture<GetinfoonliverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinfoonliverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfoonliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
