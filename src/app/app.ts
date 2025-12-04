import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from "./profile/profile";
import { SkillsComponent } from "./skills/skills";
import { ProjectsComponent } from "./projects/projects";
import { ExperienceComponent } from "./experience/experience";
import { ContactComponent } from "./contact/contact";

@Component({
  selector: 'app-root',
  imports: [Profile, SkillsComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cv-scarlet-design');
}
