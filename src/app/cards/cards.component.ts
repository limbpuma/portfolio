import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get('cards').subscribe((data: any[]) => {
      this.cards = data;
    });
  }
}
