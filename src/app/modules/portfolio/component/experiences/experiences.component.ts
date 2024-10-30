import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal <IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Angular - Estágio",
        p: "PJ | Agosto 2024 - atual"
      },
      text: "<p>Responsável pelo desenvolvimento FrontEnd de projetos solicitados.</p>"
    },
    {
      summary: {
        strong: "ANALISTA DE SISTEMAS",
        p: "Planet Printer | Agosto 2023 - Maio 2024"
      },
      text: "<p>Responsável pelo recebimento, correções e processos de arquivos de massa de dados no sistema.</p> <p>Reportar implementações e problemas para melhorias do sistema.</p>"
    },
    {
      summary: {
        strong: "ANALISTA DE SISTEMAS",
        p: "Digiloc Impressões e Soluções | Outubro 2021 - Junho 2023"
      },
      text: "<p>Auxiliar nas criações e manipulações de dados variáveis com projetos em <strong>Postscript</strong> utilizando a linguagem <strong>Visual Basic</strong></p> <p>Contato com clientes para tirar dúvidas em relação a prazos de arquivos de dados variáveis recebidos juntamente com feedbacks para melhorias do sistema.</p>"
            
    },
    {
      summary: {
        strong: "TÉCNICO DE REDES II",
        p: "Fixtell Internet | Abril 2017 - Dezembro 2019"
      },
      text: "<p>Suporte residencial aos clientes com as tecnologias de <strong>fibra óptica</strong>,<strong> PacPon</strong>, <strong>par metálico</strong> e <strong>antena de rádio</strong></p>"
    },
  ])
}
