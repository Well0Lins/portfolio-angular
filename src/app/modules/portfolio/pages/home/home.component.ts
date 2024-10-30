import { Component } from '@angular/core';

// components
import { HeaderComponent } from '../../component/header/header.component';
import { KnowledgeComponent } from '../../component/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../component/experiences/experiences.component';
import { ProjectsComponent } from '../../component/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
