import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesPageComponent } from './cookies-page.component';

describe('CookiesPageComponent', () => {
  let component: CookiesPageComponent;
  let fixture: ComponentFixture<CookiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookiesPageComponent]
    });
    fixture = TestBed.createComponent(CookiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
