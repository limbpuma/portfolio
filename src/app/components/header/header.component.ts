import { Component, OnInit } from '@angular/core';
import { PERSONAL_LINKS } from 'src/app/Services/static-data-service.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

   githubLink = PERSONAL_LINKS.github;
  linkedinLink = PERSONAL_LINKS.linkedin;

  ngOnInit(): void {
    // aquí puedes colocar lógica de inicialización si es necesario
  }
}
