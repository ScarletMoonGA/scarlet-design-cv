import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  status: 'Completado' | 'En desarrollo';
}

@Component({
  selector: 'projects',
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly projects = signal<Project[]>([
    {
      title: 'CV Interactivo / Portafolio',
      description: 'Este mismo portafolio. Una aplicación desarrollada con Angular, TypeScript y Tailwind CSS, diseñada para ser completamente responsiva y visualmente atractiva.',
      imageUrl: 'assets/cv-porfolio.png',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'Componentes Standalone'],
      repoUrl: 'https://github.com/ScarletMoonGA/scarlet-design-cv',
      status: 'Completado'
    }
  ]);
}
