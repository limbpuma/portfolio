import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.component.html',
  styleUrls: ['./mycv.component.scss']
})
export class MycvComponent {
  // Define las rutas del archivo CV para cada idioma
  cvPaths: { [key: string]: string } = {
    en: 'https://drive.google.com/file/d/1-zFTNo7oRMLv0Y5oBhigak_GER2oTUM2/view?usp=sharing',
    es: 'https://drive.google.com/file/d/1CtPVYOB9Zqo84E7NFfQhQyd9ussuA_87/view?usp=sharing',
    de: 'https://drive.google.com/file/d/1pLKyo3pRzGjpC9KRnAKoTtpEKOfans9A/view?usp=sharing'
  };

  constructor(private translate: TranslateService) {}

  // Obtén la ruta del archivo CV según el idioma actual
  getCvPath(): string {
    const currentLanguage = this.translate.currentLang || 'en';
    return this.cvPaths[currentLanguage] || this.cvPaths['en'];
  }
}
