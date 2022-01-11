import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfooncancerComponent } from './getinfooncancer.component';

describe('GetinfooncancerComponent', () => {
  let component: GetinfooncancerComponent;
  let fixture: ComponentFixture<GetinfooncancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinfooncancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfooncancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
