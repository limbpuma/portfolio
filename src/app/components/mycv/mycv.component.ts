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
    en: 'https://drive.google.com/file/d/1AH1rIvscmRsW1F9HcGBcxt4ng4k6V5GN/view?usp=share_link',
    es: 'https://drive.google.com/file/d/1-h6hu1Xg8Oea66nzTJu6qKC4bvhzpHxB/view?usp=share_link',
    de: 'https://drive.google.com/file/d/1mCw5ExPTYfobGtD_UwXru9U3xGUul9UQ/view?usp=share_link'
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
