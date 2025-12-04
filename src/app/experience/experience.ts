import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Job {
  role: string;
  company: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'experience',
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  readonly experiences = signal<Job[]>([
    {
      role: 'Desarrollador FullStack',
      company: 'I+D Solutions',
      period: 'Septiembre 2023 - Octubre 2025',
      description: [
        'Colaboré en la implementación de nuevas funcionalidades en aplicaciones desarrolladas con Angular, Ionic y Syncfusion, contribuyendo a la mejora de la experiencia del usuario y el rendimiento del producto.',
        'Implementé APIs RESTful en Node.js para dar soporte a las funcionalidades del frontend.',
        'Desarrollé y administré páginas web en WordPress y PrestaShop, personalizando diseños y funcionalidades según las necesidades del negocio.',
        'Implementé estrategias de SEO y SEM para optimizar el posicionamiento y rendimiento de páginas web.'
      ]
    },
    {
      role: 'Practicas - Desarrollo de Videojuegos',
      company: 'LabLENI',
      period: 'Marzo 2020 - Junio 2020',
      description: [
        'Programar la lógica del juego (Gameplay) en C#.',
        'Control de personajes (movimiento, animaciones, físicas).',
        'Gestión de escenas y niveles.',
        'Implementación de guardado de datos.'
      ]
    },
    {
      role: 'Practicas - Técnico Informático',
      company: 'Centro Sociosanitario Nuestra Señora del Carmen',
      period: 'Marzo 2018 - Junio 2018',
      description: [
        'Atención y resolución de incidencias (Presencial).',
        'Configuración de equipos para nuevos usuarios.',
        'Diagnóstico y reparación de ordenadores e impresoras.',
        'Instalación y configuración de sistemas operativos (Windows).',
        'Cableado de red.'
      ]
    }
  ]);
}
