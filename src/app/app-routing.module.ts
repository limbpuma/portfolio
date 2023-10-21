import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';

import { ProjectsComponent } from './components/projects/projects.component';
 // Importa tus componentes

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirige a la página principal

  { path: 'aboutMe', component: AboutmeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
