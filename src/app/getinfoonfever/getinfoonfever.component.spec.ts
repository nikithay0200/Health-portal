import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfoonfeverComponent } from './getinfoonfever.component';

describe('GetinfoonfeverComponent', () => {
  let component: GetinfoonfeverComponent;
  let fixture: ComponentFixture<GetinfoonfeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinfoonfeverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfoonfeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
