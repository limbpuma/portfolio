import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/Services/data-service.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private translate: TranslateService,
    private dataService: DataService // Inyecta el servicio DataService
  ) {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    translate.setDefaultLang(storedLang);
    translate.use(storedLang);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language);
    // No es necesario actualizar los datos aquí, ya que lo hacemos en el CardItemComponent
  }
}
