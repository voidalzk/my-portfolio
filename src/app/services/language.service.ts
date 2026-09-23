import { DOCUMENT } from '@angular/common';
import { afterNextRender, computed, inject, Injectable, signal } from '@angular/core';

export type Language = 'pt' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  readonly language = signal<Language>('pt');
  readonly isEnglish = computed(() => this.language() === 'en');
  readonly resumeUrl = computed(() =>
    this.isEnglish()
      ? 'assets/curriculum-gabriel-voidaleski-en.pdf'
      : 'assets/curriculum-gabriel-voidaleski-pt.pdf',
  );

  constructor() {
    // Apply the saved preference after hydration so server and client start in Portuguese.
    afterNextRender(() => {
      const saved = localStorage.getItem('portfolio-language');
      if (saved === 'en') this.setLanguage('en');
    });
  }

  toggle(): void {
    this.setLanguage(this.isEnglish() ? 'pt' : 'en');
  }

  setLanguage(language: Language): void {
    this.language.set(language);
    this.document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
    this.document.title = language === 'en'
      ? 'Gabriel Voidaleski | Full Stack Developer'
      : 'Gabriel Voidaleski | Desenvolvedor Full Stack';

    const description = language === 'en'
      ? 'Gabriel Voidaleski, Full Stack Developer experienced in APIs, Node.js, Vue.js, PHP, React, databases and AI integrations.'
      : 'Portfólio de Gabriel Voidaleski, desenvolvedor Full Stack com experiência em APIs, Node.js, Vue.js, PHP, React, bancos de dados e integrações com IA.';
    this.document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    this.document.querySelector('meta[property="og:title"]')?.setAttribute('content', this.document.title);
    this.document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    localStorage.setItem('portfolio-language', language);
  }
}
