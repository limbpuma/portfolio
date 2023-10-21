import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/Services/data-service.service'; // Asegúrate de que la ruta sea correcta
import { PROJECTS_DATA } from 'src/app/Services/static-data-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsData = PROJECTS_DATA;
  projects: any[] = [];
  combinedProjects: any[] = [];

  constructor(
    private translate: TranslateService,
    private dataService: DataService // Inyecta el servicio DataService
  ) {}

  ngOnInit(): void {
    // Suscríbete a los cambios en los datos de las tarjetas desde el servicio DataService
    this.dataService.cards$.subscribe((data: any[]) => {
      this.projects = this.translate.instant('projects'); // Obtén las traducciones
      // Combinar los dos arreglos
      this.combinedProjects = this.projectsData.map((projectData, index) => ({
        ...projectData,
        title: this.projects[index]?.title,
        description: this.projects[index]?.description
      }));
    });
  }
}
