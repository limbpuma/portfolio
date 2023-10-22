import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/Services/data-service.service';
import { ScrollService } from 'src/app/Services/scroll.service';
import { ElementRef, HostListener } from '@angular/core';
import { scrollFadeInOut } from '../../animations/animations';
import { CARD_ICONS } from '../../Services/static-data-service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; // Importacion BreakpointObserver y Breakpoints desde '@angular/cdk/layout'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [scrollFadeInOut],
})
export class CardsComponent implements OnInit {
  iconsData = CARD_ICONS;
  cards: any[] = [];
  animationState = 'hidden';

  // Utiliza BreakpointObserver para detectar el tipo de dispositivo
isMediumOrGreater: boolean = false;

  constructor(
    private translate: TranslateService,
    private dataService: DataService,
    private scrollService: ScrollService,
    private el: ElementRef,
private breakpointObserver: BreakpointObserver,
  ) {
    // Observa cambios en los breakpoints y actualiza la variable isMobile
    breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]) // Ajusta los breakpoints según tus necesidades
      .subscribe(result => {
        this.isMediumOrGreater = result.matches;
      });
  }

  ngOnInit(): void {
    // Suscríbete a los cambios en los datos de las tarjetas desde el servicio DataService
    this.dataService.cards$.subscribe((data: any[]) => {
      this.cards = data;
    });

    // Suscríbete a los cambios de idioma y actualiza las tarjetas cuando cambia el idioma
    this.translate.onLangChange.subscribe(() => {
      this.translate.get('cards').subscribe((data: any[]) => {
        this.cards = data;
        // Actualiza los datos de las tarjetas en el servicio DataService
        this.dataService.updateCards(this.cards);
      });
    });
  }

 @HostListener('window:scroll')
  onScroll() {
    // Verifica si el tamaño de pantalla es mediano o mayor antes de aplicar la animación
    if (!this.isMediumOrGreater || !this.scrollService.isElementInViewport(this.el)) {
      this.animationState = 'hidden'; // Cambia 'visible' a 'hidden'
    } else {
      this.animationState = 'visible';
    }
  }
}
