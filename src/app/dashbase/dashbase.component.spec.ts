import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaseComponent } from './dashbase.component';

describe('DashbaseComponent', () => {
  let component: DashbaseComponent;
  let fixture: ComponentFixture<DashbaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
