import { Component, } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { PERSONAL_LINKS } from '../projects-data.service';


emailjs.init("W2uVMjlR6dxvYWNzU");  // Reemplaza YOUR_USER_ID con tu ID de usuario de EmailJS



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name!: string;
    email!: string;
    body!: string;

  emailSent: boolean = false;

onSubmit(data: any) {
  const templateParams = {
    from_name: data.Name,
    from_email: data.EmailAddress,
    to_name: "Your Name",  // Esto puede ser tu nombre o lo que desees
    message: data.Body,
    to_email: "limbpuma_de@hotmail.com" // Dirección de correo electrónico a la que deseas enviar el mensaje
  };

   emailjs.send('service_rz82fcl', 'template_m0s2z7l', templateParams)
      .then((response) => {
         console.log('Email sent successfully!', response.status, response.text);
         this.emailSent = true; // Agrega esta línea
         this.clearForm();  // Agrega esta línea
         setTimeout(() => this.emailSent = false, 3500); // Agrega esta línea
      }, (error) => {
         console.log('Failed to send the email.', error);
      });
  }

  clearForm() {  // Agrega esta función
    this.name = '';
    this.email = '';
    this.body = '';
  }

   githubLink = PERSONAL_LINKS.github;
  linkedinLink = PERSONAL_LINKS.linkedin;

  ngOnInit(): void {
    // aquí puedes colocar lógica de inicialización si es necesario
  }
}