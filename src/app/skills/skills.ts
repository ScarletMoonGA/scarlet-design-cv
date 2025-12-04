import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'skills',
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly skillCategories = signal<SkillCategory[]>([
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'fab fa-angular' },
        { name: 'TypeScript', icon: 'fas fa-code' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Tailwind CSS', icon: 'fas fa-palette' },
        { name: 'JavaScript (ESNext)', icon: 'fab fa-js' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Firebase', icon: 'fas fa-database' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'REST APIs', icon: 'fas fa-network-wired' }
      ]
    },
    {
      name: 'CMS',
      skills: [
        { name: 'Wordpress', icon: 'fab fa-wordpress'},
        { name: 'Shopify', icon: 'fab fa-shopify'}

      ]
    },
    {
      name: 'Herramientas y DevOps',
      skills: [
        { name: 'IA', icon: 'fas fa-brain' },
        { name: 'SEO', icon: 'fa-solid fa-s'},
        { name: 'SEM', icon: 'fa-solid fa-s'}
      ]
    }
  ]);
}
