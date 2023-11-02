import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgbsComponent } from './agbs.component';

describe('AgbsComponent', () => {
  let component: AgbsComponent;
  let fixture: ComponentFixture<AgbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgbsComponent]
    });
    fixture = TestBed.createComponent(AgbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
