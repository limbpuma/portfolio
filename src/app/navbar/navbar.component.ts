import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private translate: TranslateService) {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    translate.setDefaultLang(storedLang);
    translate.use(storedLang);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language);
  }
  
}
