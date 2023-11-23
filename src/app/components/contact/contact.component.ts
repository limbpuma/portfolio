import { Component, } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { PERSONAL_LINKS } from 'src/app/Services/static-data-service.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


const EMAILJS_USER_ID = environment.emailjsUserId;


emailjs.init(EMAILJS_USER_ID);



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 showError: boolean = false;
  name!: string;
    email!: string;
    body!: string;

  emailSent: boolean = false;

onSubmit(data: any) {
  // Validar que todos los campos están llenos
  if (!this.name || !this.email || !this.body) {
    console.log('Por favor, completa todos los campos.');
    return;  // No proceder si algún campo está vacío
  }

  // Expresión regular para validar el correo electrónico
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(this.email)) {
    console.log('Please enter a valid email.');
    return;  // No proceder si el correo electrónico no es válido
  }


  // Preparar los parámetros de la plantilla de EmailJS
  const templateParams = {
    from_name: this.name,  // Usar la propiedad del componente
    from_email: this.email, // Usar la propiedad del componente
    to_name: "Your Name",  // Esto puede ser tu nombre o lo que desees
    message: this.body,    // Usar la propiedad del componente
    to_email: "limbpuma_de@hotmail.com" // Dirección de correo electrónico a la que deseas enviar el mensaje
  };

  // Lógica para enviar el correo electrónico
  emailjs.send('service_rz82fcl', 'template_m0s2z7l', templateParams)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      this.emailSent = true;
      this.clearForm();
      setTimeout(() => this.emailSent = false, 3500);
    }, (error) => {
      console.log('Failed to send the email.', error);
    });
}

clearForm() {
  this.name = '';
  this.email = '';
  this.body = '';
}

   githubLink = PERSONAL_LINKS.github;
  linkedinLink = PERSONAL_LINKS.linkedin;


  EMAILJS_USER_ID: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // aquí puedes colocar lógica de inicialización si es necesario
  }

  getConfig() {
    this.http.get('/src/assets/config.json').subscribe((config: any) => {
      this.EMAILJS_USER_ID = config.emailjsUserId;
      emailjs.init(this.EMAILJS_USER_ID);
    });
  }

  

}