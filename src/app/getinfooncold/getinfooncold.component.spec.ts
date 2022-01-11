import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfooncoldComponent } from './getinfooncold.component';

describe('GetinfooncoldComponent', () => {
  let component: GetinfooncoldComponent;
  let fixture: ComponentFixture<GetinfooncoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinfooncoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfooncoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
