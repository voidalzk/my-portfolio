import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contato" class="contact section" aria-labelledby="contact-title">
      <div class="container">
        <div class="contact-row">
          <h2 id="contact-title" class="section-heading">{{ language.isEnglish() ? 'Contact' : 'Contato' }}</h2>
          <a class="email" href="mailto:voidalzk@gmail.com">voidalzk&#64;gmail.com <span class="icon icon-external" aria-hidden="true"></span></a>
        </div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/gabriel-voidaleski-40864a215/" target="_blank" rel="noopener noreferrer">LinkedIn <span class="icon icon-external" aria-hidden="true"></span></a>
          <a href="https://github.com/voidalzk" target="_blank" rel="noopener noreferrer">GitHub <span class="icon icon-external" aria-hidden="true"></span></a>
          <a href="assets/curriculum-gabriel-voidaleski-pt.pdf" download="Gabriel_Voidaleski_CV_PT.pdf">{{ language.isEnglish() ? 'Resume' : 'Currículo' }} PT <span class="icon icon-down" aria-hidden="true"></span></a>
          <a href="assets/curriculum-gabriel-voidaleski-en.pdf" download="Gabriel_Voidaleski_CV_EN.pdf">{{ language.isEnglish() ? 'Resume' : 'Currículo' }} EN <span class="icon icon-down" aria-hidden="true"></span></a>
        </div>
        <footer><span>Gabriel Voidaleski · Curitiba, PR</span><span>Angular · {{ year }}</span></footer>
      </div>
    </section>
  `,
  styles: [`
    .contact { border-top: 1px solid var(--line); }
    .contact-row { display: flex; justify-content: space-between; align-items: baseline; gap: 1.5rem; }
    .email { font-family: var(--display); font-size: clamp(1.3rem, 3vw, 2rem); letter-spacing: -.03em; text-decoration: none; overflow-wrap: anywhere; }
    .social-links { display: flex; justify-content: flex-end; flex-wrap: wrap; gap: .7rem 1.5rem; margin-top: 1.5rem; font-size: .8rem; }
    .social-links a { display: inline-flex; align-items: center; gap: .3em; min-height: 44px; color: var(--ink-soft); }
    footer { display: flex; justify-content: space-between; gap: 1rem; border-top: 1px solid var(--line); padding-top: 1.5rem; margin-top: 2.5rem; font-size: .7rem; color: var(--ink-soft); }
    @media(max-width: 600px) { .contact-row { flex-direction: column; } .social-links { justify-content: flex-start; } footer { flex-wrap: wrap; } }
  `],
})
export class ContactComponent {
  readonly language = inject(LanguageService);
  readonly year = new Date().getFullYear();
}
