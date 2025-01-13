import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <app-header></app-header>
    <main class="smooth-scroll">
      <app-hero></app-hero>
      <app-about class="section"></app-about>
      <app-skills class="section"></app-skills>
      <app-projects class="section"></app-projects>
      <app-contact class="section"></app-contact>
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
    }

    .smooth-scroll {
      overflow-y: auto;
      scroll-behavior: smooth;
    }
  `]
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    this.animationService.initializeAnimations();
  }
}
