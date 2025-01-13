import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  initializeAnimations() {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      const sections = document.querySelectorAll('.section');
      const heroContent = document.querySelector('.hero-content');

      if (sections.length > 0) {
        gsap.set(sections, { opacity: 0, y: 50 });

        sections.forEach(section => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });
        });
      }

      if (heroContent) {
        gsap.set(heroContent, { willChange: 'transform, opacity' });
        gsap.from(heroContent, {
          duration: 1,
          opacity: 0,
          y: -30,
          clearProps: 'willChange',
          onComplete: function() {
            gsap.set(heroContent, { clearProps: 'all' });
          }
        });
      }
    }, 0);
  }
}
