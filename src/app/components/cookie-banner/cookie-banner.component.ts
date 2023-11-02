// src/app/cookie-banner/cookie-banner.component.ts
import { Component} from '@angular/core';  // Asegúrate de importar TemplateRef
import { CookieService } from 'src/app/Services/cookie.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent {
  consentGiven = false;
  constructor(
    private cookieService: CookieService,
    public translate: TranslateService,
   
  ) {
    this.consentGiven = !!this.cookieService.get('cookieConsent');

  }

  giveConsent(): void {
    this.cookieService.set('cookieConsent', 'true', 365);
    this.consentGiven = true;
  }

  denyConsent(): void {
    this.cookieService.set('cookieConsent', 'false', 365);  // Guarda el rechazo del usuario en una cookie
    this.consentGiven = true;  // Oculta el banner
  }


 

}
