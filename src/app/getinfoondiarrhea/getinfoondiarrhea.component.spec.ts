import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinfoondiarrheaComponent } from './getinfoondiarrhea.component';

describe('GetinfoondiarrheaComponent', () => {
  let component: GetinfoondiarrheaComponent;
  let fixture: ComponentFixture<GetinfoondiarrheaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinfoondiarrheaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinfoondiarrheaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
