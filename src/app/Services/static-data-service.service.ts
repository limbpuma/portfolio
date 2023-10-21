import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDataServiceService {

  constructor() { }

  
}
export const PROJECTS_DATA = [
  {
    img:'https://images.unsplash.com/photo-1696958363946-b58f40cda426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80',
    githubRepoLink: 'https://www.github.com/repo1',
    liveDemoLink: 'https://www.live-demo-link1.com',
    icons: [
      { name: 'HTML5', class: 'fab fa-html5 fa-2x icon-dark mx-2 my-2' },
      { name: 'CSS3', class: 'fab fa-css3-alt fa-2x icon-dark mx-2 my-2' },
      { name: 'JavaScript', class: 'fab fa-js-square fa-2x icon-dark mx-2 my-2' }
    ]
  },
  {
        img:'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1331&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubRepoLink: 'https://www.github.com/repo2',
    liveDemoLink: 'https://www.live-demo-link2.com',
    icons: [
      { name: 'HTML5', class: 'fab fa-html5 fa-2x icon-dark mx-2 my-2' },
      { name: 'CSS3', class: 'fab fa-css3-alt fa-2x icon-dark mx-2 my-2' },
      { name: 'JavaScript', class: 'fab fa-js-square fa-2x icon-dark mx-2 my-2' }
    ]
  },
   {
        img:'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    githubRepoLink: 'https://www.github.com/repo3',
    liveDemoLink: 'https://www.live-demo-link1.com',
    icons: [
      { name: 'HTML5', class: 'fab fa-html5 fa-2x icon-dark mx-2 my-2' },
      { name: 'CSS3', class: 'fab fa-css3-alt fa-2x icon-dark mx-2 my-2' },
      { name: 'JavaScript', class: 'fab fa-js-square fa-2x icon-dark mx-2 my-2' }
    ]
  },
  {
        img:'https://images.unsplash.com/photo-1696958363946-b58f40cda426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80',

    githubRepoLink: 'https://www.github.com/repo4',
    liveDemoLink: 'https://www.live-demo-link2.com',
    icons: [
      { name: 'HTML5', class: 'fab fa-html5 fa-2x icon-dark mx-2 my-2' },
      { name: 'CSS3', class: 'fab fa-css3-alt fa-2x icon-dark mx-2 my-2' },
      { name: 'JavaScript', class: 'fab fa-js-square fa-2x icon-dark mx-2 my-2' }
    ]
  },
   {
        img:'https://images.unsplash.com/photo-1696958363946-b58f40cda426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80',

    githubRepoLink: 'https://www.github.com/repo5',
    liveDemoLink: 'https://www.live-demo-link1.com',
    icons: [
      { name: 'HTML5', class: 'fab fa-html5 fa-2x icon-dark mx-2 my-2' },
      { name: 'CSS3', class: 'fab fa-css3-alt fa-2x icon-dark mx-2 my-2' },
      { name: 'JavaScript', class: 'fab fa-js-square fa-2x icon-dark mx-2 my-2' }
    ]
  },
  {
        img:'https://images.unsplash.com/photo-1696958363946-b58f40cda426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80',

    githubRepoLink: 'https://www.github.com/repo6',
    liveDemoLink: 'https://www.live-demo-link2.com',
    icons: [
      { name: 'HTML5', class: 'fab fa-html5 fa-2x icon-dark mx-2 my-2' },
      { name: 'CSS3', class: 'fab fa-css3-alt fa-2x icon-dark mx-2 my-2' },
      { name: 'JavaScript', class: 'fab fa-js-square fa-2x icon-dark mx-2 my-2' }
    ]
  }
  
];
export const PERSONAL_LINKS = {
  github: 'https://github.com/tu_usuario',
  linkedin: 'https://www.linkedin.com/in/tu_usuario/'
};
export const CARD_ICONS = [
   { "name": "Desarrollo Frontend", "class": "fab fa-angular fa-2x icon-dark mx-2", "ariaLabel": "Angular Icon" },
  { "name": "Desarrollo Backend", "class": "fab fa-java fa-2x icon-dark", "ariaLabel": "Java Icon" },
  { "name": "Metodologías Ágiles", "class": "fas fa-users fa-2x icon-dark", "ariaLabel": "Agile Icon" },
  { "name": "Idiomas", "class": "fas fa-language fa-2x icon-dark", "ariaLabel": "Language Icon" },
  { "name": "Educación", "class": "fas fa-graduation-cap fa-2x icon-dark", "ariaLabel": "Education Icon" },
  { "name": "Atributos Personales", "class": "fas fa-heart fa-2x icon-dark", "ariaLabel": "Heart Icon" }

];
