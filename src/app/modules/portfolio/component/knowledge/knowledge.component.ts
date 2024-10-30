import { Component, signal } from '@angular/core';

//Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal <IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento typescript'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento angular'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento nodejs'
    },
    {
      src: 'assets/icons/knowledge/kotlin.svg',
      alt: 'Ícone de conhecimento kotlin'
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: 'Ícone de conhecimento mysql'
    },
    


  ])
}
