import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  initializeAnimations() {
    // Animação de entrada suave para seções
    gsap.utils.toArray('.section').forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Animação do hero
    gsap.from('.hero-content', {
      duration: 1.5,
      opacity: 0,
      y: -50,
      stagger: 0.3,
      ease: 'power3.out'
    });

    // Animação das skills
    gsap.from('.skill-category', {
      duration: 0.8,
      opacity: 0,
      y: 30,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 70%'
      }
    });
  }
} 