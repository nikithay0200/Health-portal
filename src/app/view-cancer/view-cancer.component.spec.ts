import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCancerComponent } from './view-cancer.component';

describe('ViewCancerComponent', () => {
  let component: ViewCancerComponent;
  let fixture: ComponentFixture<ViewCancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
