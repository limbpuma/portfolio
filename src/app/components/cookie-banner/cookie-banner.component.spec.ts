import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieBannerComponent } from './cookie-banner.component';

describe('CookieBannerComponent', () => {
  let component: CookieBannerComponent;
  let fixture: ComponentFixture<CookieBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookieBannerComponent]
    });
    fixture = TestBed.createComponent(CookieBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should deny consent when denyConsent is called', () => {
    spyOn(component['cookieService'], 'set');  // Espía el método set del servicio CookieService
    component.denyConsent();
    expect(component['cookieService'].set).toHaveBeenCalledWith('cookieConsent', 'false', 365);
    expect(component.consentGiven).toBeTrue();
  });
});
