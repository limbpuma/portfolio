import { Component, OnInit } from '@angular/core';
import { PERSONAL_LINKS } from 'src/app/Services/static-data-service.service';
import {typeWriterAnimation} from 'src/app/animations/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [typeWriterAnimation]
})
export class HeaderComponent implements OnInit{
  animationState = 'visible';
   githubLink = PERSONAL_LINKS.github;
  linkedinLink = PERSONAL_LINKS.linkedin;

  ngOnInit(): void {
    // aquí puedes colocar lógica de inicialización si es necesario
  }
  
}
