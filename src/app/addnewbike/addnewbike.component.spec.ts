import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbikeComponent } from './addnewbike.component';

describe('AddnewbikeComponent', () => {
  let component: AddnewbikeComponent;
  let fixture: ComponentFixture<AddnewbikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewbikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
