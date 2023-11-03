import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {scrollPulse} from '../../animations/animations';
import { ScrollService } from 'src/app/Services/scroll.service';
import { ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.component.html',
  styleUrls: ['./mycv.component.scss'],
   animations: [scrollPulse]
})
export class MycvComponent {
  // Define las rutas del archivo CV para cada idioma
  cvPaths: { [key: string]: string } = {
    en: 'assets/resume/ResumeEN.pdf',
    es: 'assets/resume/ResumeES.pdf',
    de: 'assets/resume/ResumeDE.pdf'
  };

  animationState = 'visible';
  constructor(private translate: TranslateService, private scrollService: ScrollService,
    private el: ElementRef) {}

  // Obtén la ruta del archivo CV según el idioma actual
  getCvPath(): string {
    const currentLanguage = this.translate.currentLang || 'en';
    
    return this.cvPaths[currentLanguage] || this.cvPaths['en'];
  }

  
 @HostListener('window:scroll')
onScroll() {
    if (this.scrollService.isElementInViewport(this.el)) {
      
      this.animationState = 'visible';
    } else {
      
      this.animationState = 'hidden';
    }
}
}
