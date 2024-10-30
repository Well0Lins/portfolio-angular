import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  
  public arrayProjects = signal <IProjects[]> ([
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto Vida FullStack",
      title: "Vida Fullstack",
      width: '100px',
      height: '51px',
      description: '<p>ashasuhsuahsuhuasha</p>',
      links: [
        {
          name: 'conheça o blog',
          href: 'www.google.com'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto Vida FullStack",
      title: "Vida Fullstack",
      width: '100px',
      height: '51px',
      description: '<p>ashasuhsuahsuhuasha</p>',
      links: [
        {
          name: 'conheça o blog',
          href: 'www.google.com'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto Vida FullStack",
      title: "Vida Fullstack",
      width: '100px',
      height: '51px',
      description: '<p>ashasuhsuahsuhuasha</p>',
      links: [
        {
          name: 'conheça o blog',
          href: 'www.google.com'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto Vida FullStack",
      title: "Vida Fullstack",
      width: '100px',
      height: '51px',
      description: '<p>ashasuhsuahsuhuasha</p>',
      links: [
        {
          name: 'conheça o blog',
          href: 'www.google.com'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto Vida FullStack",
      title: "Vida Fullstack",
      width: '100px',
      height: '51px',
      description: '<p>ashasuhsuahsuhuasha</p>',
      links: [
        {
          name: 'conheça o blog',
          href: 'www.google.com'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto Vida FullStack",
      title: "Vida Fullstack",
      width: '100px',
      height: '51px',
      description: '<p>ashasuhsuahsuhuasha</p>',
      links: [
        {
          name: 'conheça o blog',
          href: 'www.google.com'
        }
      ]
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
  
}
