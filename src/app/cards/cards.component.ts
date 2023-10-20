import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../animations/scroll.service';
import { scrollFadeIn } from '../animations/animations'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [scrollFadeIn]  // Agrega tu animación aquí
})
export class CardsComponent implements OnInit {
  cards: any[] = [];
  animationState = 'hidden'; // Agrega una propiedad para manejar el estado de la animación

  constructor(
    private translate: TranslateService,
    private scrollService: ScrollService,
    private el: ElementRef  // Inyecta ElementRef
  ) {}

  ngOnInit(): void {
    this.translate.get('cards').subscribe((data: any[]) => {
      this.cards = data;
    });
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
