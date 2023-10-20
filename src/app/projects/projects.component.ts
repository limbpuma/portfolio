import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PROJECTS_DATA } from '../projects-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsData = PROJECTS_DATA;
  projects: any[] = [];
  combinedProjects: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get('projects').subscribe((translations: any[]) => {
      this.projects = translations;

      // Combinar los dos arreglos
      this.combinedProjects = this.projectsData.map((data, index) => ({
        ...data,
        title: this.projects[index]?.title,
        description: this.projects[index]?.description
      }));
    });
  }
}
