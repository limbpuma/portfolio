import { Component } from '@angular/core';
import { PERSONAL_LINKS } from 'src/app/Services/static-data-service.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
 
})
export class FooterComponent {
 

  

  githubLink = PERSONAL_LINKS.github;
  linkedinLink = PERSONAL_LINKS.linkedin;

  ngOnInit(): void {
    // aquí puedes colocar lógica de inicialización si es necesario
  }
}


