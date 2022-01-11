import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighbpComponent } from './highbp.component';

describe('HighbpComponent', () => {
  let component: HighbpComponent;
  let fixture: ComponentFixture<HighbpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighbpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
