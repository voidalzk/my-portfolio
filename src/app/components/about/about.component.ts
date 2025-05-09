import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      transition(':leave', [
        animate('300ms ease-out',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        )
      ])
    ])
  ]
})
export class AboutComponent {
  isVisible = false;
  isEducationVisible = false;
  spotifyLoaded = false;
  isExperienceVisible = false;

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
    this.isEducationVisible = false;
    this.isExperienceVisible = false;
  }

  toggleEducationVisibility(): void {
    this.isEducationVisible = !this.isEducationVisible;
    this.isVisible = false;
    this.isExperienceVisible = false;
  }

  toggleExperienceVisibility(): void {
    this.isExperienceVisible = !this.isExperienceVisible;
    this.isVisible = false;
    this.isEducationVisible = false;
  }
}
